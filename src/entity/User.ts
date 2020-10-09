import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql"

@ObjectType()
@Entity()
export class User {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field(type => Int)
    @Column()
    age: number;

}
