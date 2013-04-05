
var products = [
  {
    "PRID": "ABC AC904",
    "PRNAME": "ABC ACCESSORY BELTS"
  },
  {
    "PRID": "ABC AV889",
    "PRNAME": "ABC AVALANCHE PROBE"
  },
  {
    "PRID": "ABC HE718",
    "PRNAME": "ABC HEUVOS"
  },
  {
    "PRID": "BANDIT1020",
    "PRNAME": "BANDITO SCRAMBLE BREAKFAST ENT"
  },
  {
    "PRID": "BEEF T990",
    "PRNAME": "BEEF TERIYAKI W\/RICE DOUBLE SE"
  },
  {
    "PRID": "BUZZ A214",
    "PRNAME": "BUZZ AWAY"
  },
  {
    "PRID": "CHEESE999",
    "PRNAME": "CHEESE OMLETTE BREAKFAST COURS"
  },
  {
    "PRID": "COCKPI295",
    "PRNAME": "COCKPIT COVERS"
  },
  {
    "PRID": "DELAWA1081",
    "PRNAME": "DELAWARE\/MARYLAND DELORME ATLA"
  },
  {
    "PRID": "DIGAJO102",
    "PRNAME": "DIGAJOHN"
  },
  {
    "PRID": "EGGS W1000",
    "PRNAME": "EGGS W\/BACON BREAKFAST COURSE"
  },
  {
    "PRID": "EURO H509",
    "PRNAME": "EURO HIKING SOCK"
  },
  {
    "PRID": "FIRST54",
    "PRNAME": "FIRST NEED DELUXE WATER PURIFI"
  },
  {
    "PRID": "GERBER494",
    "PRNAME": "GERBER MULTI TOOL NEDDLENOSE B"
  },
  {
    "PRID": "HIP PA283",
    "PRNAME": "HIP PADZ"
  },
  {
    "PRID": "IN THE1132",
    "PRNAME": "IN THE ZONE"
  },
  {
    "PRID": "KNOT T275",
    "PRNAME": "KNOT TYING GAME"
  },
  {
    "PRID": "LUNA B867",
    "PRNAME": "LUNA BARS"
  },
  {
    "PRID": "MEGAGR906",
    "PRNAME": "MEGAGRIP"
  },
  {
    "PRID": "XERIC905",
    "PRNAME": "XERIC CHALK"
  }
];

var data = {};

function productListing() {
  data["PRODSFL"] = products;
  pui.show({
    path: "../prodlist.json",
    data: data,
    handler: function(response) {
      if (response["btnExit"] == "1") {
        document.body.innerHTML = "<br/>You have exited the application.";
        return;
      }      
      data["PRODSFL"] = products;
      productListing();
    } 
  });
}
