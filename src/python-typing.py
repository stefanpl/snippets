from typing import NewType


####
### NewType
####

# Create a variant of an existing type that has a special meaning.
# same concept as https://codemix.com/opaque-types-in-javascript/

UserId = NewType("UserId", int)
some_id = UserId(524313)
