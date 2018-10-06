import React from "react";
import App from "./App";
import { render, waitForElement } from "react-testing-library";

beforeEach(() => {
  fetch.resetMocks();
});

it("renders with 10 carpark information", async () => {
  const mockCarparkResponse = {
    items: [
      {
        timestamp: "2018-10-06T17:33:29+08:00",
        carpark_data: [
          {
            carpark_info: [
              { total_lots: "83", lot_type: "C", lots_available: "0" }
            ],
            carpar_number: "HE12",
            update_datetime: "2018-10-06T17:32:08"
          },
          {
            carpark_info: [
              { total_lots: "583", lot_type: "C", lots_available: "259" }
            ],
            carpar_number: "HLM",
            update_datetime: "2018-10-06T17:32:21"
          },
          {
            carpark_info: [
              { total_lots: "322", lot_type: "C", lots_available: "216" }
            ],
            carpar_number: "RHM",
            update_datetime: "2018-10-06T17:32:09"
          },
          {
            carpark_info: [
              { total_lots: "97", lot_type: "C", lots_available: "46" }
            ],
            carpar_number: "BM29",
            update_datetime: "2018-10-06T17:32:01"
          },
          {
            carpark_info: [
              { total_lots: "96", lot_type: "C", lots_available: "30" }
            ],
            carpar_number: "Q81",
            update_datetime: "2018-10-06T17:31:59"
          },
          {
            carpark_info: [
              { total_lots: "173", lot_type: "C", lots_available: "14" }
            ],
            carpar_number: "C20",
            update_datetime: "2018-10-06T17:31:59"
          },
          {
            carpark_info: [
              { total_lots: "228", lot_type: "C", lots_available: "164" }
            ],
            carpar_number: "FR3M",
            update_datetime: "2018-10-06T17:32:16"
          },
          {
            carpark_info: [
              { total_lots: "289", lot_type: "C", lots_available: "162" }
            ],
            carpar_number: "C32",
            update_datetime: "2018-10-06T17:32:25"
          },
          {
            carpark_info: [
              { total_lots: "332", lot_type: "C", lots_available: "150" }
            ],
            carpar_number: "C6",
            update_datetime: "2018-10-06T17:32:06"
          },
          {
            carpark_info: [
              { total_lots: "277", lot_type: "C", lots_available: "64" }
            ],
            carpar_number: "TG2",
            update_datetime: "2018-10-06T17:32:58"
          },
          {
            carpark_info: [
              { total_lots: "552", lot_type: "C", lots_available: "208" }
            ],
            carpar_number: "BP1",
            update_datetime: "2018-10-06T17:33:01"
          },
          {
            carpark_info: [
              { total_lots: "135", lot_type: "C", lots_available: "58" }
            ],
            carpar_number: "TG1",
            update_datetime: "2018-10-06T17:33:12"
          },
          {
            carpark_info: [
              { total_lots: "191", lot_type: "C", lots_available: "0" }
            ],
            carpar_number: "TGM2",
            update_datetime: "2018-10-06T17:33:04"
          },
          {
            carpark_info: [
              { total_lots: "140", lot_type: "C", lots_available: "20" }
            ],
            carpar_number: "TE14",
            update_datetime: "2018-10-06T17:33:24"
          },
          {
            carpark_info: [
              { total_lots: "49", lot_type: "C", lots_available: "1" }
            ],
            carpar_number: "BM3",
            update_datetime: "2018-10-06T17:33:04"
          },
          {
            carpark_info: [
              { total_lots: "612", lot_type: "C", lots_available: "70" }
            ],
            carpar_number: "BM9",
            update_datetime: "2018-10-06T17:33:16"
          }
        ]
      }
    ]
  };

  fetch.mockResponseOnce(JSON.stringify(mockCarparkResponse));

  const { container, getByText } = render(<App />);
  await waitForElement(() => getByText("Car Park Number:"));
  const carparkList = container.querySelectorAll("ul li");
  expect(carparkList).toHaveLength(10);
});
