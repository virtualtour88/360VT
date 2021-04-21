TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "label": "Dining Area",
  "thumbnailUrl": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_t.jpg",
  "class": "Panorama",
  "mapLocations": [
   {
    "y": 942,
    "angle": 37.69,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "levels": [
       {
        "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F.jpeg",
        "height": 1027,
        "class": "ImageResourceLevel",
        "width": 1600
       },
       {
        "grayscale": true,
        "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_lq.jpeg",
        "height": 513,
        "class": "ImageResourceLevel",
        "width": 800
       }
      ],
      "class": "ImageResource"
     },
     "label": "1 BHK-Type A_For VR Plan-01",
     "thumbnailUrl": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_t.jpg",
     "fieldOfViewOverlayInsideColor": "#FFFFFF",
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "class": "Map",
     "minimumZoomFactor": 1,
     "maximumZoomFactor": 1.8,
     "overlays": [
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_1.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 300,
        "height": 110,
        "y": 386,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F948E75A_F030_6729_41EA_6A5026B8F91C",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 386,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_1_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 300
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_0.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 146,
        "height": 110,
        "y": 887,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F9297370_F030_1FF9_41E7_6151A6ECB275",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 887,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_0_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 146
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_2.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 812,
        "height": 110,
        "y": 547,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F91E7EBC_F030_2969_41ED_5C110CDA0B5D",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 547,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_2_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 812
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_3.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1334,
        "height": 110,
        "y": 278,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F950402A_F030_1969_41E1_4390F4A3943E",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 278,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_3_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1334
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_4.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 670,
        "height": 110,
        "y": 818,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F983A36A_F030_3FE8_41E3_B6B14CE527F7",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 818,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_4_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 670
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_5.png",
           "height": 101,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1260,
        "height": 110,
        "y": 814,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_F9B5008D_F030_1928_41E9_5810C3D9F624",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 110,
        "y": 814,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_F8AE92E9_F030_1EE8_41E5_E32828F5755F_HS_5_map.gif",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ],
         "class": "ImageResource"
        },
        "width": 96,
        "x": 1260
       }
      }
     ],
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.1,
     "width": 1725,
     "height": 1108,
     "id": "map_F8AE92E9_F030_1EE8_41E5_E32828F5755F"
    },
    "x": 194
   }
  ],
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "toolTip": "Living Room",
        "displayTooltipInTouchScreens": true
       }
      ],
      "id": "overlay_E8AD5E57_EFF8_6D79_41D0_3B137C831715",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_2_0_0_map.gif",
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.66,
        "hfov": 7.49
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_2_0.png",
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 120
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.83,
        "yaw": -22.66,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.49
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "toolTip": "Kitchen",
        "displayTooltipInTouchScreens": true
       }
      ],
      "id": "overlay_E8AD4E57_EFF8_6D79_41E4_6F5EADF5F351",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_3_0_0_map.gif",
           "height": 60,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.14,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 24.06,
        "hfov": 7.49
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_0_HS_3_0.png",
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 120
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.14,
        "yaw": 24.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.49
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_t.jpg"
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "label": "Kitchen",
     "thumbnailUrl": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_t.jpg",
     "class": "Panorama",
     "mapLocations": [
      {
       "y": 602,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
       "x": 860
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_E936EB72_EFF8_AB3B_41C9_9CB4301CFBB9",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_1_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -125.52,
           "hfov": 7.5
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_1_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "yaw": -125.52,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "toolTip": "Master Bedroom",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_E936DB73_EFF8_AB39_41EC_C4227B5962FC",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_0_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.3,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 118.55,
           "hfov": 7.5
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_0_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.3,
           "yaw": 118.55,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 4)",
           "toolTip": "Bathroom",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_E936CB73_EFF8_AB39_41DE_3A2EFE5E3494",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_2_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.57,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -148.88,
           "hfov": 7.5
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_0_HS_2_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.57,
           "yaw": -148.88,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_r_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_f_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_b_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_u_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_d_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_l_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "label": "Bathroom",
        "thumbnailUrl": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_t.jpg",
        "class": "Panorama",
        "mapLocations": [
         {
          "y": 873,
          "angle": 94.83,
          "class": "PanoramaMapLocation",
          "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
          "x": 718
         }
        ],
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_E7684F7F_EFF8_EB29_41E3_7D7F25CF606A",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_0_HS_0_0_0_map.gif",
                 "height": 60,
                 "class": "ImageResourceLevel",
                 "width": 60
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.92,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -115.58,
              "hfov": 7.49
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_0_HS_0_0.png",
                 "height": 120,
                 "class": "ImageResourceLevel",
                 "width": 120
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.92,
              "yaw": -115.58,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.49
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_t.jpg"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
          "backwardYaw": 177.38,
          "class": "AdjacentPanorama",
          "yaw": -115.58,
          "distance": 1
         }
        ],
        "id": "panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
        "partial": false,
        "pitch": 0
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -148.88,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "label": "Master Bedroom",
        "thumbnailUrl": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_t.jpg",
        "class": "Panorama",
        "mapLocations": [
         {
          "y": 333,
          "angle": 0,
          "class": "PanoramaMapLocation",
          "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
          "x": 1382
         }
        ],
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "toolTip": "Kitchen",
              "displayTooltipInTouchScreens": true
             }
            ],
            "id": "overlay_E80B84CE_EFF8_DD6B_41DB_E526FAAE9A41",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_0_0_0_map.gif",
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 67
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -131.33,
              "hfov": 8.43
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_0_0.png",
                 "height": 135,
                 "class": "ImageResourceLevel",
                 "width": 135
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.43,
              "yaw": -131.33,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.43
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_FE2CA124_F023_DC76_41B6_3E3F14E5EB81",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_3_0_0_map.gif",
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 67
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.26,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -172.47,
              "hfov": 8.43
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_0_HS_3_0.png",
                 "height": 135,
                 "class": "ImageResourceLevel",
                 "width": 135
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.26,
              "yaw": -172.47,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.43
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_t.jpg"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
          "backwardYaw": 177.38,
          "class": "AdjacentPanorama",
          "yaw": -131.33,
          "distance": 1
         },
         {
          "panorama": {
           "hfovMax": 120,
           "label": "Master Bathroom",
           "thumbnailUrl": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_t.jpg",
           "class": "Panorama",
           "mapLocations": [
            {
             "y": 869,
             "angle": 97.47,
             "class": "PanoramaMapLocation",
             "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
             "x": 1308
            }
           ],
           "vfov": 180,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_FE97D570_F021_A4EE_41AA_082AA1BB9B30",
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_0_HS_0_0_0_map.gif",
                    "height": 67,
                    "class": "ImageResourceLevel",
                    "width": 67
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -103.26,
                 "hfov": 8.44
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_0_HS_0_0.png",
                    "height": 135,
                    "class": "ImageResourceLevel",
                    "width": 135
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 0.01,
                 "yaw": -103.26,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.44
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_r_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_f_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_b_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_u_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_d_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_l_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_t.jpg"
            }
           ],
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
             "backwardYaw": 179.13,
             "class": "AdjacentPanorama",
             "yaw": -103.26,
             "distance": 1
            }
           ],
           "id": "panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
           "partial": false,
           "pitch": 0
          },
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": -172.47,
          "distance": 1
         }
        ],
        "id": "panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
        "partial": false,
        "pitch": 0
       },
       "backwardYaw": 179.13,
       "class": "AdjacentPanorama",
       "yaw": 118.55,
       "distance": 1
      },
      {
       "panorama": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
       "backwardYaw": 153.15,
       "class": "AdjacentPanorama",
       "yaw": -125.52,
       "distance": 1
      }
     ],
     "id": "panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": 177.38,
    "class": "AdjacentPanorama",
    "yaw": 24.06,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 120,
     "label": "Living Room",
     "thumbnailUrl": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_t.jpg",
     "class": "Panorama",
     "mapLocations": [
      {
       "y": 441,
       "angle": -178.35,
       "class": "PanoramaMapLocation",
       "map": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
       "x": 348
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "toolTip": "Kitchen",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_E7A27DDD_EFF8_AF69_419C_63A63CD53A02",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_1_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.39,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -55.96,
           "hfov": 7.5
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_1_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.39,
           "yaw": -55.96,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area",
           "displayTooltipInTouchScreens": true
          }
         ],
         "id": "overlay_E7A24DDD_EFF8_AF69_41D8_E073BAB2B12B",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_0_0_0_map.gif",
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 15.69,
           "hfov": 7.5
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_0_HS_0_0.png",
              "height": 120,
              "class": "ImageResourceLevel",
              "width": 120
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "yaw": 15.69,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.5
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_r_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_f_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_b_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_u_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_d_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_l_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
       "backwardYaw": 153.15,
       "class": "AdjacentPanorama",
       "yaw": 15.69,
       "distance": 1
      }
     ],
     "id": "panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": 2.88,
    "class": "AdjacentPanorama",
    "yaw": -22.66,
    "distance": 1
   }
  ],
  "id": "panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
  "partial": false,
  "pitch": 0
 },
 {
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "paddingRight": 0
  },
  "buttonPlayPause": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 40,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "paddingRight": 0
  },
  "buttonMoveRight": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "paddingRight": 0
  },
  "buttonPlayLeft": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 40,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonPlayRight": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 40,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "paddingRight": 0
  },
  "buttonMoveDown": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "paddingRight": 0
  },
  "buttonRestart": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 40,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "paddingRight": 0
  },
  "buttonMoveLeft": {
   "transparencyActive": true,
   "minWidth": 0,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "width": 32,
   "height": 32,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "paddingRight": 0
  }
 },
 {
  "viewerArea": {
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "top": "1.27%",
   "minWidth": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowColor": "#333333",
   "paddingLeft": 0,
   "minHeight": 1,
   "borderRadius": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBorderRadius": 4,
   "toolTipFontWeight": "normal",
   "toolTipBorderRadius": 3,
   "toolTipFontSize": 12,
   "toolTipTextShadowBlurRadius": 3,
   "shadow": false,
   "toolTipShadowVerticalLength": 0,
   "class": "ViewerArea",
   "toolTipOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "progressLeft": 10,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "playbackBarBorderSize": 2,
   "paddingBottom": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "toolTipShadowSpread": 0,
   "height": "97.09%",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "borderSize": 0,
   "playbackBarHeadHeight": 30,
   "toolTipShadowBlurRadius": 3,
   "id": "MapViewer",
   "progressRight": 10,
   "playbackBarHeadShadowVerticalLength": 0,
   "paddingRight": 0,
   "progressOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "toolTipPaddingLeft": 6,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "toolTipFontColor": "#606060",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBackgroundOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "width": "97.966%",
   "progressBarOpacity": 1,
   "playbackBarBottom": 0,
   "progressBorderColor": "#AAAAAA",
   "progressBottom": 2,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "progressHeight": 20,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBorderSize": 2,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeight": 20,
   "right": "0.71%",
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderColor": "#AAAAAA",
   "progressBarBorderRadius": 4
  },
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
  "movementMode": "constrained"
 },
 {
  "timeToIdle": 1000,
  "id": "panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.35,
   "class": "PanoramaCameraPosition",
   "yaw": -26.85
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8"
 },
 "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
 {
  "timeToIdle": 1000,
  "id": "panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.14,
   "class": "PanoramaCameraPosition",
   "yaw": -177.12
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5"
 },
 "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
 {
  "timeToIdle": 1000,
  "id": "panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.57,
   "class": "PanoramaCameraPosition",
   "yaw": -2.62
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C"
 },
 "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
 {
  "timeToIdle": 1000,
  "id": "panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.92,
   "class": "PanoramaCameraPosition",
   "yaw": -0.87
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13"
 },
 "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
 {
  "timeToIdle": 1000,
  "id": "panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC"
 },
 "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
 {
  "timeToIdle": 1000,
  "id": "panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_F946E60E_F023_6432_41E7_F30843AD06F6"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_F946E60E_F023_6432_41E7_F30843AD06F6"
 },
 {
  "items": [
   {
    "media": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47AE2EC_F3C0_E3A5_41DC_34F6737F274D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47AE2EC_F3C0_E3A5_41DC_34F6737F274D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E8AD2E56_EFF8_6D7B_41BB_B16EA077E3BD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47D02ED_F3C0_E3A7_41D0_1E4B62E5D003, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47D02ED_F3C0_E3A7_41D0_1E4B62E5D003",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7A21DDC_EFF8_AF6F_41DD_1FE9DD87A67B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47D42ED_F3C0_E3A7_41E0_98E0F1B313C7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47D42ED_F3C0_E3A7_41E0_98E0F1B313C7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E936FB72_EFF8_AB3B_41E1_49A4B37A3D26_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47D92ED_F3C0_E3A7_41E7_4967BBF8519F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47D92ED_F3C0_E3A7_41E7_4967BBF8519F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E80BD4CE_EFF8_DD6B_41BF_1E1961BFAEE7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47DD2EE_F3C0_E3A5_41CF_C7C455061190, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47DD2EE_F3C0_E3A5_41CF_C7C455061190",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E777BF7F_EFF8_EB29_41EA_1D8D60E2174D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F47C12EE_F3C0_E3A5_41EC_715900846C8F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F47C12EE_F3C0_E3A5_41EC_715900846C8F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E68F4501_EFF9_BCD9_41D1_7333DA8195E6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
 {
  "items": [
   {
    "media": "this.map_F8AE92E9_F030_1EE8_41E5_E32828F5755F",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_F47A72EC_F3C0_E3A5_41B9_0500CA23ECFC",
  "class": "PlayList"
 },
 {
  "id": "audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.ogg"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "top": 0,
  "minWidth": 100,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "minHeight": 50,
  "borderRadius": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "height": "100%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "playbackBarHeadHeight": 30,
  "toolTipShadowBlurRadius": 3,
  "id": "MainViewer",
  "progressRight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingRight": 0,
  "progressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarBorderRadius": 4
 },
 {
  "scrollBarColor": "#000000",
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "bottom": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 360,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "scrollBarOpacity": 0.5,
      "minWidth": 20,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "minHeight": 20,
      "layout": "vertical",
      "height": "100%",
      "borderRadius": 0,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "shadow": false,
      "scrollBarWidth": 10,
      "class": "Container",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "overflow": "hidden",
      "gap": 4,
      "horizontalAlign": "center",
      "borderSize": 0,
      "width": 40,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "transparencyActive": true,
      "minWidth": 0,
      "paddingLeft": 0,
      "minHeight": 0,
      "borderRadius": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "shadow": false,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "cursor": "hand",
      "horizontalAlign": "center",
      "borderSize": 0,
      "width": 40,
      "height": 40,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingLeft": 0,
    "minHeight": 20,
    "layout": "horizontal",
    "contentOpaque": false,
    "borderRadius": 0,
    "verticalAlign": "middle",
    "height": "95.07%",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "class": "Container",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "hidden",
    "gap": 4,
    "horizontalAlign": "center",
    "borderSize": 0,
    "width": 360,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "paddingRight": 0
   }
  ],
  "paddingLeft": 0,
  "minHeight": 1,
  "layout": "horizontal",
  "contentOpaque": false,
  "borderRadius": 0,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "gap": 10,
  "horizontalAlign": "center",
  "borderSize": 0,
  "height": 142,
  "paddingRight": 0
 },
 {
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "width": "25.764%",
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "bottom": "1.49%",
  "children": [
   "this.MapViewer"
  ],
  "paddingLeft": 0,
  "minHeight": 1,
  "layout": "absolute",
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "height": "29.717%",
  "shadow": false,
  "scrollBarWidth": 10,
  "class": "Container",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "right": "0.83%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "id": "Container_FB31667C_F3AD_A1BD_41E1_DC01BD79AD33"
 }
], 
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "start": "this.playAudioList([this.audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC]); this.mainPlayList.set('selectedIndex', 0); this.playList_F47A72EC_F3C0_E3A5_41B9_0500CA23ECFC.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){    return window[key]; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "existsKey": function(key){    return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "unregisterKey": function(key){    delete window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 20,
 "layout": "absolute",
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingBottom": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "borderSize": 0,
 "id": "rootPlayer",
 "paddingRight": 0
})