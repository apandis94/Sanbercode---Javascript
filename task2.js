const jsonMessage = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: "A01-01-01-A",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 76,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: "A01-01-01-B",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 71,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 10,
      createdTime: "2022-02-08T10:35:19Z",
    },
  ],
  message: "success",
};

jsonMessage.data.map(function (params) {
  if ((params.id == 100000057466 && params.storageId == 10000002181) || (params.id == 100000057465 && params.storageId == 10000008207)) {
    console.log("Quantity = ", params.quantity);
  } else if (params.id == 100000065224 && params.storageId == 10000008884) {
    console.log("Quantity = ", params.quantity, " + ");
  } else {
    return;
  }
});

(keys = ["quantity"]), (sums = jsonMessage.data.reduce((r, o) => (keys.forEach((k) => (r[k] += o[k])), r), Object.fromEntries(keys.map((k) => [k, 0]))));

console.log("------------------");
console.log("Total Quantity =", sums);
