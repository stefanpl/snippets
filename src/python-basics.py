####
### JSON
####

import json
from typing import Any

# decode
someJsonString = '{ "some": "value" }'
decodedValue = json.loads(someJsonString)

# encode
anyObject = {"a": 123, "b": True}
encodedValue = json.dumps(anyObject)


####
### is (not) operator
####

# Checks if two instances are the same.
# This is DIFFERENT to JavaScript's === operator.
# In general, value checks should be done using ==

# false
anyObject is None

clonedObj = json.loads(json.dumps(anyObject))

# Same 'value', but not the same object --> False!
anyObject is clonedObj

# True
anyObject == clonedObj


####
### asserts
####
class Company:
    name: str
    number_of_employees: int


nvon: Company = {
    "name": "nvon",
    "number_of_employees": 100,
}

assert isinstance(nvon, Company), "nvon should be a company"

# checkinf for a list

myArr: Any = [1, 2, 3]
# no type hints here, since it's Any
assert isinstance(myArr, list)
# now we can operate on a list object
myArr.append(10)
