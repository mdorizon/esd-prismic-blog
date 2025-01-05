// utils/connectAirtable.ts
import Airtable from "airtable";

const connectAirtable = () => {
  //@ts-ignore
  return new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);
};

export default connectAirtable;
