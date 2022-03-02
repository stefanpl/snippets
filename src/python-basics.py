####
### JSON
####

import json

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
