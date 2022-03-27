module.exports = {
  apps : [{
    name: 'dev',
    script: './src/index.ts',
    instances: 1,
    autorestart: false,
    watch: false,
    env: {
      PORT: 1235,
      NODE_ENV: 'development',
      // MariaDB_HOST: "localhost",
      // MariaDB_PORT:3306,
      // MariaDB_USER:"root",
      // MariaDB_PASSWORD:"",
      // MariaDB_NAME:"DB-Name",
      // Redis_HOST: "localhost",
      // Redis_PORT: 6379
    },
  },
  {
    name: 'production',
    script: './src/index.ts',
    instances: -1, // 클러스터 모드
    autorestart: false,
    watch: false,
    env: {
      PORT: 1235,
      NODE_ENV: 'production',
      // MariaDB_HOST: "localhost",
      // MariaDB_PORT:3306,
      // MariaDB_USER:"root",
      // MariaDB_PASSWORD:"",
      // MariaDB_NAME:"DB-Name",
      // Redis_HOST: "localhost",
      // Redis_PORT: 6379
    },
  }],

  deploy : {
    production : {
      // user : 'SSH_USERNAME',
      // host : 'SSH_HOSTMACHINE',
      // ref  : 'origin/master',
      // repo : 'GIT_REPOSITORY',
      // path : 'DESTINATION_PATH',
      // 'pre-deploy-local': '',
      // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      // 'pre-setup': ''
    }
  }
};
