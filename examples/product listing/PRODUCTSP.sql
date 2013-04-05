SET TRANSACTION ISOLATION LEVEL NO COMMIT;

CREATE TABLE PRODUCTSP (
  PRID CHAR(10) NOT NULL DEFAULT '',
  PRNAME CHAR(30) NOT NULL DEFAULT ''
);

LABEL ON TABLE PRODUCTSP
  IS 'Product Master' ;

-- Sampple Data
INSERT INTO PRODUCTSP VALUES
  ('ABC AC904',  'ABC ACCESSORY BELTS'),
  ('ABC AV889',  'ABC AVALANCHE PROBE'),
  ('ABC HE718',  'ABC HEUVOS'),
  ('BANDIT1020', 'BANDITO SCRAMBLE BREAKFAST ENT'),
  ('BEEF T990',  'BEEF TERIYAKI W/RICE DOUBLE SE'),
  ('BUZZ A214',  'BUZZ AWAY'),
  ('CHEESE999',  'CHEESE OMLETTE BREAKFAST COURS'),
  ('COCKPI295',  'COCKPIT COVERS'),
  ('DELAWA1081', 'DELAWARE/MARYLAND DELORME ATLA'),
  ('DIGAJO102',  'DIGAJOHN'),
  ('EGGS W1000', 'EGGS W/BACON BREAKFAST COURSE'),
  ('EURO H509',  'EURO HIKING SOCK'),
  ('FIRST54',    'FIRST NEED DELUXE WATER PURIFI'),
  ('GERBER494',  'GERBER MULTI TOOL NEDDLENOSE B'),
  ('HIP PA283',  'HIP PADZ'),
  ('IN THE1132', 'IN THE ZONE'),
  ('KNOT T275',  'KNOT TYING GAME'),
  ('LUNA B867',  'LUNA BARS'),
  ('MEGAGR906',  'MEGAGRIP'),
  ('XERIC905',   'XERIC CHALK');

