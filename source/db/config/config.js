export default {
  development: {
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: null,
    password: null,
    port: 5432,
    replication: {
      read: [
        {
          host: process.env.READ_DB_1_HOSTNAME,
          username: process.env.DB_USERNAME,
          password: process.env.READ_DB_PW,
        },
        {
          host: process.env.READ_DB_2_HOSTNAME,
          username: process.env.DB_USERNAME,
          password: process.env.READ_DB_PW,
        },
      ],
      write: {
        host: process.env.WRITE_DB_HOSTNAME,
        username: process.env.DB_USERNAME,
        password: process.env.WRITE_DB_PW,
      },
    },
    pool: {
      max: 20,
      idle: 30000,
    },
  },
};
// export const test = {
//   dialect: "postgres",
//   username: process.env.DB_NAME,
//   port: 5432,
//   replication: {
//     read: [
//       {
//         host: process.env.READ_DB_1_HOSTNAME,
//         username: process.env.DB_USERNAME,
//         password: process.env.READ_DB_PW,
//       },
//       {
//         host: process.env.READ_DB_2_HOSTNAME,
//         username: process.env.DB_USERNAME,
//         password: process.env.READ_DB_PW,
//       },
//     ],
//     write: {
//       host: process.env.WRITE_DB_HOSTNAME,
//       username: process.env.DB_USERNAME,
//       password: process.env.WRITE_DB_PW,
//     },
//   },
//   pool: {
//     max: 20,
//     idle: 30000,
//   },
// };
// export const production = {
//   dialect: "postgres",
//   username: process.env.DB_NAME,
//   port: 5432,
//   replication: {
//     read: [
//       {
//         host: process.env.READ_DB_1_HOSTNAME,
//         username: process.env.DB_USERNAME,
//         password: process.env.READ_DB_PW,
//       },
//       {
//         host: process.env.READ_DB_2_HOSTNAME,
//         username: process.env.DB_USERNAME,
//         password: process.env.READ_DB_PW,
//       },
//     ],
//     write: {
//       host: process.env.WRITE_DB_HOSTNAME,
//       username: process.env.DB_USERNAME,
//       password: process.env.WRITE_DB_PW,
//     },
//   },
//   pool: {
//     max: 20,
//     idle: 30000,
//   },
// };
