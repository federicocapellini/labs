const bigSorting = require('./01-big-sorting')

test('#bigSorting()', () => {
  expect(bigSorting(['31415926535897932384626433832795', '1', '3', '10', '3', '5']))
    .toEqual(['1', '3', '3', '5', '10', '31415926535897932384626433832795'])

  expect(bigSorting([
    '369083749934287458182122003065256592898206519643354633451493306493349329018898116541225559817928735735155964056102708363574142733324147091773944364938650904738964324446998831069095224449467435555127743083886592562167312846632694348808961014567905343711505679886208583647068374722490583410991779732518045487184817175507398709160601211790638621142602776144357737531078127270570168089125820179145021816307897135057327066632362260463802205004293879355872845110784163330381742216164530280310672338839104489482037750122587501757315215551391401873480541022036366203341797129363486121626845130510506051508535645452008933265689117339653656424293074171964237095328832986031628483758035720105008537556462475785958539732265461557299347727800204518246929709378937898735172627636289452308544301755708600384950529136693920200598893972270190156251031188419827309779409475611548531815298431797263464003340146709942834402324601949290137821363795995337566502830497122981122527178708230375845252529781809672861232856828',
    '4170325240842735373955913970047945056775000089057788678298029031538320665302115013522891893730983548979642224758554143145152592590854429127181528682876108129438122019997841720931720897059241454980436116397345000788493165751330055647608035490433994270895690015147048746222573945814766228690339429342830062780134804359389616540614186501001759561843690281881625251875873079802162175160367674589033159634751510744515571488721629145405772953863711680464017733031466787290680022314832504311883633641516793063503189571819145731657125267081341123992158287831178529946648132105407726179350592671729758013772417746765064989484448224290104616182379499456489294473594781024078887941773726043045354166998722629408060698636275364009984045466841171308899063479459493342991251399466179771639630569944840441552048299169390410811193901225748085573964431473876599391603207540824755966718509359528325541613651364031856004069810647402077383759335203369888690819713556456813223611768586426252430494136403641326430475913',
  ])).toEqual([
    '4170325240842735373955913970047945056775000089057788678298029031538320665302115013522891893730983548979642224758554143145152592590854429127181528682876108129438122019997841720931720897059241454980436116397345000788493165751330055647608035490433994270895690015147048746222573945814766228690339429342830062780134804359389616540614186501001759561843690281881625251875873079802162175160367674589033159634751510744515571488721629145405772953863711680464017733031466787290680022314832504311883633641516793063503189571819145731657125267081341123992158287831178529946648132105407726179350592671729758013772417746765064989484448224290104616182379499456489294473594781024078887941773726043045354166998722629408060698636275364009984045466841171308899063479459493342991251399466179771639630569944840441552048299169390410811193901225748085573964431473876599391603207540824755966718509359528325541613651364031856004069810647402077383759335203369888690819713556456813223611768586426252430494136403641326430475913',
    '369083749934287458182122003065256592898206519643354633451493306493349329018898116541225559817928735735155964056102708363574142733324147091773944364938650904738964324446998831069095224449467435555127743083886592562167312846632694348808961014567905343711505679886208583647068374722490583410991779732518045487184817175507398709160601211790638621142602776144357737531078127270570168089125820179145021816307897135057327066632362260463802205004293879355872845110784163330381742216164530280310672338839104489482037750122587501757315215551391401873480541022036366203341797129363486121626845130510506051508535645452008933265689117339653656424293074171964237095328832986031628483758035720105008537556462475785958539732265461557299347727800204518246929709378937898735172627636289452308544301755708600384950529136693920200598893972270190156251031188419827309779409475611548531815298431797263464003340146709942834402324601949290137821363795995337566502830497122981122527178708230375845252529781809672861232856828',
  ])
})
