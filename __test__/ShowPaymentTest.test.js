import payMent from '../chapter1/showPayment';
test('함수작동테스트', () =>{
  //given
  const invoicesJson =
    [
      {
          "customer": "BigCo",
          "performances": [
              {
                  "playID": "hamlet",
                  "audience": 55
              },
              {
                  "playID": "as-like",
                  "audience": 35
              },
              {
                  "playID": "othello",
                  "audience": 40
              }
          ]
      }
  ];
  const playJson = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
  }
  //when
  const resultData = payMent(invoicesJson, playJson);

  console.log(resultData);

});