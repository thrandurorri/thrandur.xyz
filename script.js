const imageUrls = [
    "https://i.pinimg.com/564x/d1/af/bc/d1afbc6b812df6f8e37568764426a395.jpg",
    "https://i.pinimg.com/736x/db/54/95/db549506c3ffb49cbf50c2a468345f06.jpg",
    "https://i.pinimg.com/564x/cc/81/2b/cc812b0872f15c70122f7e42eb3c2fc3.jpg",
    "https://i.pinimg.com/564x/fc/c1/0c/fcc10c550bcee7875d5b0c06b5761d45.jpg",
    "https://i.pinimg.com/564x/c2/64/e4/c264e4dd203261efb1763c49f64065df.jpg",
    "https://i.pinimg.com/564x/25/ff/dd/25ffdd7a1fb8190a7a4c6c8a4f877e6c.jpg",
    "https://i.pinimg.com/564x/8c/b2/44/8cb24485ca937cea24c48eb35417c329.jpg",
    "https://i.pinimg.com/564x/98/d4/fa/98d4fabc12bf478ce53d309b10f1d257.jpg",
    "https://i.pinimg.com/736x/0b/e8/5e/0be85e3a86a2881c2bff568df0138b07.jpg",
    "https://i.pinimg.com/564x/f7/64/08/f76408f4153a194396494b9df41f25c0.jpg",
    "https://i.pinimg.com/564x/9e/6d/9a/9e6d9a69aae587b23ddb7a5c5783263a.jpg",
    "https://i.pinimg.com/564x/da/32/e0/da32e053f7298480772acac3db9b6c53.jpg",
    "https://i.pinimg.com/564x/fc/6c/a7/fc6ca72e316b84e687d6410dc1f47f46.jpg",
    "https://i.pinimg.com/564x/42/e9/f1/42e9f1eb1eedac343652892898e1349a.jpg",
    "https://i.pinimg.com/564x/5e/3f/3e/5e3f3e21e1a4e8768bf91da10f796ffb.jpg",
    "https://i.pinimg.com/564x/d4/ee/9d/d4ee9d1433e9f32ccbfcfbcc16b063f1.jpg",
    "https://i.pinimg.com/564x/c2/ba/7d/c2ba7d6f7e2e325a78fe6333e11c8205.jpg",
    "https://i.pinimg.com/564x/d3/5e/72/d35e726291d00cfb868261eceaef379f.jpg",
    "https://i.pinimg.com/564x/50/1e/00/501e00225c1021e8b20a977cddd7d418.jpg",
    "https://i.pinimg.com/564x/cb/29/b7/cb29b780236dd042e0b7f64bb5531a09.jpg",
    "https://i.pinimg.com/564x/75/ce/05/75ce05042acff9c886ba9a38863c31ac.jpg",
    "https://i.pinimg.com/564x/3b/fd/9d/3bfd9d111264ce46d99c034e66651a01.jpg",
    "https://i.pinimg.com/564x/a2/3d/48/a23d48c598801fb23836efcc092db3b8.jpg",
    "https://i.pinimg.com/564x/1c/f7/2e/1cf72e1c91385dcbbddbbf6cc8fa2447.jpg",
    "https://i.pinimg.com/564x/d0/dd/ee/d0ddee345c3d1626b50a680de8c01384.jpg",
    "https://i.pinimg.com/564x/0c/50/59/0c5059ee219f65a57bf0f0b258ccfafe.jpg",
    "https://i.pinimg.com/564x/9d/72/f8/9d72f8888a9e0c9c2da8f169d4e34514.jpg",
    "https://i.pinimg.com/564x/6a/f5/e2/6af5e23a8cc6d2347c9684e95c1b5802.jpg",
    "https://i.pinimg.com/564x/19/63/89/196389619517cb17da62c3b093d3e4b1.jpg",
    "https://i.pinimg.com/564x/fb/85/71/fb8571c426f141cefe33b00d204dab7f.jpg",
    "https://i.pinimg.com/564x/5c/bc/04/5cbc04de116280df1ac736671b1b86c4.jpg",
    "https://i.pinimg.com/564x/60/9e/ec/609eec6b0aa02a9c9ee8e72184607d80.jpg",
    "https://i.pinimg.com/564x/8b/20/51/8b20514c9f619dbc789c4b2c9e6f4aa1.jpg",
    "https://i.pinimg.com/564x/af/a9/e0/afa9e006047fa4fed55fe4e1edaba78c.jpg",
    "https://i.pinimg.com/564x/19/a0/79/19a07934cc080c44ca8461429f482816.jpg",
    "https://i.pinimg.com/564x/9c/13/d9/9c13d920bb3a4490bf569098d6cbf193.jpg",
    "https://i.pinimg.com/564x/2c/02/2a/2c022aea07e6cacf998abbe3f0c1968c.jpg",
    "https://i.pinimg.com/564x/cf/0c/b5/cf0cb56f2d9dbcb0e08e3d0a2621d5bb.jpg",
    "https://i.pinimg.com/564x/66/55/ae/6655ae0180b5db87ea3552468958e24f.jpg",
    "https://i.pinimg.com/564x/88/33/6d/88336d9ea63fcb8a00a81f521902cfd0.jpg",
    "https://i.pinimg.com/564x/43/27/a0/4327a0cb97460657f945d6388068dc74.jpg",
    "https://i.pinimg.com/564x/48/20/79/482079920762046c495cf4e388410948.jpg",
    "https://i.pinimg.com/564x/c8/fd/44/c8fd4424a15ed6b4b552afe59873bb59.jpg",
    "https://i.pinimg.com/564x/59/b6/e4/59b6e410f31306b076423764ffdc3422.jpg",
    "https://i.pinimg.com/564x/14/a8/b0/14a8b0ee40bd24f231cdb27490fc95c7.jpg",
    "https://i.pinimg.com/564x/e3/30/60/e330600d8fc7d397e616926e0351eb9f.jpg",
    "https://i.pinimg.com/736x/0e/86/61/0e86617b336f7165061ca83c953c8e10.jpg",
    "https://i.pinimg.com/564x/18/34/55/18345565c9a7ab630ba562e647e66779.jpg",
    "https://i.pinimg.com/564x/a3/0e/49/a30e49f367cc9d967886d343bab310cf.jpg",
    "https://i.pinimg.com/736x/64/84/05/648405d1b0291d355285600b1dc981fa.jpg",
    "https://i.pinimg.com/564x/60/65/b3/6065b375d3ecb54f1598e5099468b66d.jpg",
    "https://i.pinimg.com/564x/6f/57/a4/6f57a41e45c98c7c22402933832ccea3.jpg",
    "https://i.pinimg.com/564x/05/4b/ee/054bee3cc2573a5274a100dbef51ffcb.jpg",
    "https://i.pinimg.com/564x/ea/03/1c/ea031c48b2e24be130cdfd913edad00c.jpg",
    "https://i.pinimg.com/564x/c9/2e/22/c92e2298d3684997360cc147632ee623.jpg",
];

const imageFeed = document.getElementById("imageFeed");

imageUrls.forEach(url => {
    console.log("Adding image:", url);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const imageElement = document.createElement("img");
    imageElement.src = url;
    imageElement.width = 500;

    imageContainer.appendChild(imageElement);
    imageFeed.appendChild(imageContainer);
});
