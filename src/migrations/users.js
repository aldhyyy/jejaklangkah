const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users(
        _id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        role ENUM('user','seller','superadmin') NOT NULL DEFAULT 'user',
        firstname VARCHAR(60) NOT NULL,
        lastname VARCHAR(60) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL UNIQUE,
        gender ENUM('male', 'female', 'others'),
        birthday DATE DEFAULT NULL,
        create_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        update_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
        email_verified BOOLEAN DEFAULT FALSE,
        email_verified_at DATETIME DEFAULT NULL
    );
`;

exports.Table = [createUsersTable];
exports.Relation = [];
