const { createClient } = require('redis') ;

const redisClient = createClient({
    username: 'default',
    password: 'xcxdDlUZXklYPYt7VXn5XstC4PrPER00',
    socket: {
        host: 'redis-13659.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 13659
    }
});

module.exports = redisClient;