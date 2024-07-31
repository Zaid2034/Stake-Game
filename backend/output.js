
/* eslint-disable no-unused-vars */
const MULTIPLIERS = {
  0: 16,
  1: 9,
  2: 2,
  3: 1.4,
  4: 1.4,
  5: 1.2,
  6: 1.1,
  7: 1,
  8: 0.5,
  9: 1,
  10: 1.1,
  11: 1.2,
  12: 1.4,
  13: 1.4,
  14: 2,
  15: 9,
  16: 16,
};


// const outputs={ "0": [ 404.62836480320783, 392.8004044875599 ], "1": [ 392.9814633851363 ], "2": 
//     [ 401.1650121310373, 396.19376424510284 ], "3": [ 393.0230804255753, 396.40916462944494 ], 
//     "4": [ 407.88516330877275, 395.91338237851625, 396.28807304172307, 394.346016739157, 402.34331410934385, 402.2631802444041, 402.27379500091223 ], "5": [ 406.5827519049559, 402.2493518052581, 398.92050489947337, 403.86439112907675, 392.6124352067426, 393.32321994923495, 402.15326780861903, 403.34714207136096, 404.40264926867695, 393.09997947220995, 398.53611675426447, 402.67777250095367 ], 
//     "6": [ 409.75067232329343, 390.94896056364433, 407.87218195395457, 403.2128364991706, 397.18225522869045, 404.2604416894247, 400.2791199555949, 395.94805717932024, 396.30051931139815, 401.97345809773356, 406.18104330033646, 396.2613342000174, 396.3461072381675, 401.2891023303098, 397.4902234276055, 404.6641462098313, 398.04300798790933, 402.6217074958264, 394.54529280224756, 390.0677280090872 ], 
//     "7": [ 406.5929402312617, 404.83461382498405, 396.18172257225837, 392.92242939626027, 392.1670891223431, 409.120790682991, 392.6327552691128, 396.4963778058651, 402.209745224942, 405.0861315718496, 396.93890363062593, 392.27645774166285, 395.0201601425381, 399.1090695610075, 397.2102363105395, 404.43300024408705, 394.8553155463179, 393.2097438041183, 395.8221198218556, 408.5599347017156, 400.5662075861934, 393.543289448213, 398.20162417595026, 399.02633541429543, 400.48118259295813, 399.461423323874, 398.1712339085862, 398.8570920563556, 395.41208660344046 ], 
//     "8": [ 395.2480807994517, 390.90257577945266, 393.5407199428062, 406.3175764442992, 406.179969690644, 401.781210715868, 406.5578292397632, 396.81506566196316, 408.04623966981984, 397.2321670456319, 409.16054481298704, 391.0021525743594, 399.38205108181575, 406.7401454115537, 405.11772114995154, 392.0954505668856, 405.8655900018449, 407.4912814731845, 409.229300801062, 397.5646307818967, 403.997586212725, 395.3848965391152 ], 
//     "9": [ 392.8282062831799, 405.3054442363058, 395.29096932006826, 405.206098171663, 393.9576955813735, 397.05369510216275, 403.71522140460587, 398.37265568039095, 406.1613771050201, 397.85497452294436, 399.92592851977486, 390.2579134362096, 396.7024460866943, 392.5922585179165, 407.47018809655066, 390.192839184701, 395.4305874971395, 396.09479135390376, 400.21206675292115, 395.37537222579147, 401.38184505077066, 394.80398510868605, 392.412164511151, 399.74046397390345 ], 
//     "10": [ 396.6538038656352, 406.49506329856337, 398.3082842858384, 409.84345658838413, 395.2283912277673, 402.0743680325214, 399.58762277547754, 400.9769794450971, 401.79004753949715, 405.0493851477582, 400.96544074723903, 393.0143020893839, 408.63385768673385, 393.78259800287003, 395.63116341029615, 404.9449174866188, 405.44574069013316, 409.39903388594576, 399.7225340591807, 407.69850551411787, 407.0892685029422, 401.1834378569868, 401.9184766507091, 399.70147925128566, 400.86934101551526, 408.5364019150555 ], 
//     "11": [ 398.7353447985753, 400.70557581132203, 403.7605234017658, 401.8252954457258, 401.67160927383725, 408.68353345698523, 407.33007677010687, 408.2300737236599, 406.3413986954041, 406.05790347875876, 408.8886780505995, 394.705979908439, 405.99242693510473, 393.8802087858334, 408.7477325693282, 401.84899800084065, 392.1952101414692 ], 
//     "12": [ 405.5107322607721, 402.63426431280004, 404.9554813428481, 400.1513199147345, 390.8468039486815, 408.5311807086487, 406.82322635751075, 407.1095434128559, 409.10805462586563, 396.64530222206093, 409.3194928947902, 401.5779874055349, 403.00552545631115, 407.03151022362897, 391.19138882481815, 408.12165868402707 ], 
//     "13": [ 394.13895934681466, 403.75306896229284, 396.0718584772389, 391.5811076850503, 407.1437329768823, 401.87689499358584 ], 
//     "14": [], "15": [], "16": [ 399.33311101004534 ] };
const outputs={ "0": [ 394.60933397560655 ], 
    "1": [ 392.6337443047606, 392.8471507262335 ], 
    "2": [397.44496236931667, 399.0483252158134, 394.9413509211956 ], 
    "3": [404.60960069795993, 400.42400811225855, 392.29932948664276 ], 
    "4": [398.5012308796437, 391.64374291132884, 401.31233785817614 ], 
    "5": [396.2439935529422, 402.4129741361899, 400.0062597526942 ], 
    "6": [390.1319917239164, 401.1696807217992, 390.4143861254307 ], 
    "7": [405.24782327799124, 394.83131220541685, 396.12078195348744 ], 
    "8": [407.4183123330748, 393.26750672826375, 396.07263060759897 ], 
    "9": [404.43802458958737, 398.2565319526738, 398.07818829438384 ], 
    "10": [396.58256424502514, 406.72018775305884, 404.58406977026317 ], 
    "11": [409.63169484175245, 402.83355065034874, 406.9483021815188 ], 
    "12": [402.4465848538055, 401.9787920796672, 404.5797547617139 ], 
    "13": [392.9342023391764,407.23216305519236, 396.70968271741236 ], 
    "14": [391.36083810242684,397.64549164844937, 405.67213284850726 ], 
    "15": [403.52880349350517, 407.18687153755656 ], 
    "16": [407.29037393891707] }

module.exports={MULTIPLIERS,outputs}
