import { observable } from "mobx";
import BaseModel from "./BaseModel";
import Field from "./decorators/Field";

class Pin extends BaseModel {
  id: string;
  collectionId: string;
  documentId: string;

  @observable
  @Field
  index: string;

  createdAt: string;
  updatedAt: string;
}

export default Pin;
