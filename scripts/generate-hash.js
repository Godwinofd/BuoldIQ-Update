const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = process.argv[2];

    if (!password) {
        console.error('Please provide a password as an argument');
        console.log('Usage: node generate-hash.js YOUR_PASSWORD');
        process.exit(1);
    }

    const hash = await bcrypt.hash(password, 10);
    console.log('\n=== Admin Password Hash ===');
    console.log(hash);
    console.log('\nCopy this hash and use it as ADMIN_PASSWORD_HASH in your .env file');
}

generateHash();
