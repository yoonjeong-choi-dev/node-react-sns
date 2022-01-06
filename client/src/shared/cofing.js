export const stage = process.env.NODE_ENV;
export const baseURL = (stage === 'development') ? '/data' :'http://localhost:7166/';   // 추후 변경 필요