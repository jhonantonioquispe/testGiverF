
export class Option {
  _id: String;
  text : String;
  attachment : String;  
  
  constructor (_id, text, attachment) {
    this._id = _id;
    this.text = text;
    this.attachment = attachment;    
  }
}