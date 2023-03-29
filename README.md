# mikro-orm-get-mapped-type-repo

Repro steps:

1. `yarn`
2. `yarn mikro-orm schema:create --dump`

I want `full_name` to have type `text`, but it actually has type `varchar(255)`.
