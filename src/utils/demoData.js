import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export const barChartData = [
    {
      "country": "AD",
      "hot dog": 163,
      "hot dogColor": "hsl(251, 70%, 50%)",
      "burger": 44,
      "burgerColor": "hsl(39, 70%, 50%)",
      "sandwich": 12,
      "sandwichColor": "hsl(224, 70%, 50%)",
      "kebab": 127,
      "kebabColor": "hsl(143, 70%, 50%)",
      "fries": 45,
      "friesColor": "hsl(99, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(27, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 163,
      "hot dogColor": "hsl(63, 70%, 50%)",
      "burger": 45,
      "burgerColor": "hsl(303, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(240, 70%, 50%)",
      "kebab": 190,
      "kebabColor": "hsl(66, 70%, 50%)",
      "fries": 28,
      "friesColor": "hsl(205, 70%, 50%)",
      "donut": 122,
      "donutColor": "hsl(292, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 52,
      "hot dogColor": "hsl(136, 70%, 50%)",
      "burger": 173,
      "burgerColor": "hsl(35, 70%, 50%)",
      "sandwich": 13,
      "sandwichColor": "hsl(121, 70%, 50%)",
      "kebab": 127,
      "kebabColor": "hsl(291, 70%, 50%)",
      "fries": 94,
      "friesColor": "hsl(138, 70%, 50%)",
      "donut": 115,
      "donutColor": "hsl(132, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 176,
      "hot dogColor": "hsl(320, 70%, 50%)",
      "burger": 46,
      "burgerColor": "hsl(37, 70%, 50%)",
      "sandwich": 137,
      "sandwichColor": "hsl(170, 70%, 50%)",
      "kebab": 20,
      "kebabColor": "hsl(89, 70%, 50%)",
      "fries": 9,
      "friesColor": "hsl(130, 70%, 50%)",
      "donut": 97,
      "donutColor": "hsl(69, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 42,
      "hot dogColor": "hsl(184, 70%, 50%)",
      "burger": 86,
      "burgerColor": "hsl(210, 70%, 50%)",
      "sandwich": 177,
      "sandwichColor": "hsl(182, 70%, 50%)",
      "kebab": 183,
      "kebabColor": "hsl(77, 70%, 50%)",
      "fries": 100,
      "friesColor": "hsl(304, 70%, 50%)",
      "donut": 120,
      "donutColor": "hsl(39, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 102,
      "hot dogColor": "hsl(281, 70%, 50%)",
      "burger": 125,
      "burgerColor": "hsl(57, 70%, 50%)",
      "sandwich": 186,
      "sandwichColor": "hsl(62, 70%, 50%)",
      "kebab": 126,
      "kebabColor": "hsl(319, 70%, 50%)",
      "fries": 134,
      "friesColor": "hsl(163, 70%, 50%)",
      "donut": 181,
      "donutColor": "hsl(109, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 173,
      "hot dogColor": "hsl(30, 70%, 50%)",
      "burger": 87,
      "burgerColor": "hsl(158, 70%, 50%)",
      "sandwich": 69,
      "sandwichColor": "hsl(206, 70%, 50%)",
      "kebab": 24,
      "kebabColor": "hsl(241, 70%, 50%)",
      "fries": 23,
      "friesColor": "hsl(161, 70%, 50%)",
      "donut": 177,
      "donutColor": "hsl(339, 70%, 50%)"
    }
  ]
  export const pieChartData = [
    {
      "id": "c",
      "label": "c",
      "value": 17,
      "color": "hsl(18, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 556,
      "color": "hsl(17, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 50,
      "color": "hsl(183, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 397,
      "color": "hsl(215, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 54,
      "color": "hsl(67, 70%, 50%)"
    }
  ]

  export const plantTableData = [
    {
        "id": '1',
        "status": 'Unassigned',
        "lastStatusDate": new Date().toLocaleString(),
        "area": 'Unassigned',
        "unit": 'Unassigned',
        "assetTag": 'FCV-103A',
        "lastDateReceived": new Date().toLocaleString(),
        "issues": <FontAwesomeIcon icon={faBell} color="red" />,
        "processApplication": 'Wall valve FC',
        "valveApplication": 'On/Off'
    },
    {
      "id": '2',
      "status": 'Assigned',
      "lastStatusDate": new Date().toLocaleString(),
      "area": 'Unassigned',
      "unit": 'Unassigned',
      "assetTag": 'FCV-103B',
      "lastDateReceived": new Date().toLocaleString(),
      "issues": <FontAwesomeIcon icon={faBell} color="red" />,
      "processApplication": 'Wall valve FC',
      "valveApplication": 'Modulating'
  },
  {
    "id": '3',
    "status": 'Unassigned',
    "lastStatusDate": new Date().toLocaleString(),
    "area": 'Unassigned',
    "unit": 'Unassigned',
    "assetTag": 'XV-101',
    "lastDateReceived": new Date().toLocaleString(),
    "issues": <FontAwesomeIcon icon={faBell} color="red" />,
    "processApplication": 'Wall valve FC',
    "valveApplication": 'Modulating'
},
{
  "id": '4',
  "status": 'Unassigned',
  "lastStatusDate": new Date().toLocaleString(),
  "area": 'Unassigned',
  "unit": 'Unassigned',
  "assetTag": 'PV-101',
  "lastDateReceived": new Date().toLocaleString(),
  "issues": <FontAwesomeIcon icon={faBell} color="red" />,
  "processApplication": 'Wall valve FC',
  "valveApplication": 'On/Off'
},
{
  "id": '5',
  "status": 'Assigned',
  "lastStatusDate": new Date().toLocaleString(),
  "area": 'Unassigned',
  "unit": 'Unassigned',
  "assetTag": 'PV-101',
  "lastDateReceived": new Date().toLocaleString(),
  "issues": <FontAwesomeIcon icon={faBell} color="red" />,
  "processApplication": 'Wall valve FC',
  "valveApplication": 'Modulating'
},
]