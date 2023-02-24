declare module "./index.vue";

export type TypePayload = {
  type: "static" | "dynamic";
  cell?: {
    height?: number;
  };
  list?: any[];
};
