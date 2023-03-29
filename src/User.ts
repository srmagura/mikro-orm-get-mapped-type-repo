import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  // Setting `type` doesn't make a difference: @Property({ type: "string" })
  @Property()
  fullName!: string;
}
