import supertest from "supertest";
import StatusCodes from "http-status-codes";
import { SuperTest, Test, Response } from "supertest";
import { paths as printPaths } from "@routes/print-router";
import app from "@server";
import { Print } from "@services/types";
import printService from "@services/print-service";
import * as fetch from "node-fetch";

describe("print-router", () => {
  const printPath = "/api/prints";
  const getPrintsPath = `${printPath}${printPaths.getPrints}`;

  const { BAD_REQUEST, CREATED, OK } = StatusCodes;
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  /***********************************************************************************
   *                                    Test Get
   **********************************************************************************/

  describe(`"GET:${getPrintsPath}"`, () => {
    it(`returns a JSON object with all the users and a status code of "${OK}" if the
            request was successful.`, (done) => {
      // Setup spy
      const prints: Print[] = [
        {
          verificationleveldescription:
            "Best. Object is extensively researched, well described and information is vetted",
          copyright: null,
          images: [
            {
              date: "2017-07-19",
              copyright: "President and Fellows of Harvard College",
              imageid: 477570,
              idsid: 433893168,
              format: "image/jpeg",
              description: null,
              technique:
                "Make:Hasselblad;Model:Hasselblad H5D-50c MS;Orientation:1;Software:Adobe Photoshop CS6 (Macintosh);",
              renditionnumber: "764264",
              displayorder: 1,
              baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764264",
              alttext: null,
              width: 2550,
              publiccaption: null,
              iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/433893168",
              height: 1685,
            },
          ],
          creditline:
            "Harvard Art Museums/Fogg Museum, Gray Collection of Engravings Fund and Alphaeus Hyatt Fund",
          standardreferencenumber: "Delteil 26; Clément 44; Brugerolles E.41",
          signed: null,
          technique: "Lithograph",
          description: 'Printed from "stone" paper',
          classification: "Prints",
          verificationlevel: 4,
          primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764264",
          people: [
            {
              role: "Artist",
              birthplace: "Rouen",
              gender: "male",
              displaydate: "1791 - 1824",
              prefix: null,
              culture: "French",
              displayname: "Théodore Géricault",
              alphasort: "Géricault, Théodore",
              name: "Théodore Géricault",
              personid: 21958,
              deathplace: "Paris",
              displayorder: 1,
            },
          ],
          colors: [
            {
              color: "#e1e1e1",
              spectrum: "#955ba5",
              hue: "Grey",
              percent: 0.6508417508417509,
              css3: "#dcdcdc",
            },
          ],
          url: "https://www.harvardartmuseums.org/collections/object/265775",
          provenance:
            "[Alfred Beurdeley II, Paris]. [R.E. Lewis, San Francisco] sold; to Fogg Art Museum, 1964",
          culture: "French",
          contact: "am_europeanamerican@harvard.edu",
          imagepermissionlevel: 0,
          rank: 218913,
          dated: "1821",
          id: 265775,
          seeAlso: [
            {
              id: "https://iiif.harvardartmuseums.org/manifests/object/265775",
              type: "IIIF Manifest",
              format: "application/json",
              profile: "http://iiif.io/api/presentation/2/context.json",
            },
          ],
        },
      ];

      spyOn(printService, "getPrints").and.returnValue(Promise.resolve(prints));
      // Call API
      agent.get(`${getPrintsPath}?page=1`).end((err: Error, res: Response) => {
        expect(res.status).toBe(OK);
        // Caste instance-objects to 'User' objects
        const respPrints = res.body.prints;

        expect(respPrints).toEqual(prints);
        expect(res.body.error).toBeUndefined();
        done();
      });
    });

    it(`returns a JSON object containing an error message and a status code of
            "${StatusCodes.INTERNAL_SERVER_ERROR}" if the request was unsuccessful.`, (done) => {
      const errMsg = "Failed to fetch prints";
      spyOn(fetch, "default").and.throwError(errMsg);

      agent.get(`${getPrintsPath}?page=1`).end((err: Error, res: Response) => {
        expect(res.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body.error).toBe(errMsg);
        done();
      });
    });

    it(`returns a JSON object containing an validation error message and a status code of
    "${StatusCodes.INTERNAL_SERVER_ERROR}" if missing page query params.`, (done) => {
      const errMsg = '"page" must be a number';
      spyOn(fetch, "default").and.throwError(errMsg);

      agent
        .get(`${getPrintsPath}?page=asd`)
        .end((err: Error, res: Response) => {
          expect(res.status).toBe(StatusCodes.BAD_REQUEST);
          expect(res.body.error).toBe(errMsg);
          done();
        });
    });
  });
});
