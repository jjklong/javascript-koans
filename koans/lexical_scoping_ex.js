// test.js
it("should use lexical scoping to synthesise functions", function () {

  function makeMysteryFunction(makerValue)
  {
    var newFunction = function doMysteriousThing(param)
    {
      return makerValue + param;
    };
    return newFunction;
  }

  var mysteryFunction3 = makeMysteryFunction(3);
  var mysteryFunction5 = makeMysteryFunction(5);

  expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
});


//line 13 is returned in line 10 assigning the function to a new var mysteryFunction3 with markerValue = 3:
  mysteryFunction3 = // markerValue = 3 from line 13
    var newFunction = function doMysteriousThing(param){
      return 3 + param;
    };
//doing the same for line 14:
  mysteryFunction5 = // markerValue = 5 from line 14
    var function = function doMysteriousThing(param){
      return 5 + param;
    }

//then when plugged into line 16, the following number becomes the param
mysteryFunction3(10) =
  function doMysteriousThing(10){
    return 3 + 10; //=> 13
  }
// +
mysteryFunction5(5) =
  function doMysteriousThing(5){
    return 5 + 5; //=> 10
  }

  expect(3+10  +  5+5)//=>  23
