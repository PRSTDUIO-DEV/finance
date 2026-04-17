import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const conn = await mysql.createConnection(process.env.DATABASE_URL);

// Check existing tables
const [tables] = await conn.query("SHOW TABLES");
console.log("Existing tables:", tables.map(t => Object.values(t)[0]));

// Create tables one by one with TiDB-compatible syntax
const createStatements = [
  `CREATE TABLE IF NOT EXISTS articles (
    id int AUTO_INCREMENT NOT NULL,
    slug varchar(255) NOT NULL,
    title varchar(500) NOT NULL,
    excerpt text,
    keywords text,
    category varchar(100),
    readTime int DEFAULT 5,
    publishDate varchar(20),
    body text,
    isPublished int DEFAULT 1,
    sortOrder int DEFAULT 0,
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    UNIQUE KEY articles_slug_unique (slug)
  )`,
  `CREATE TABLE IF NOT EXISTS houses (
    id int AUTO_INCREMENT NOT NULL,
    title varchar(255) NOT NULL,
    type varchar(100) NOT NULL,
    floors int NOT NULL DEFAULT 2,
    bedrooms int NOT NULL DEFAULT 2,
    bathrooms int NOT NULL DEFAULT 2,
    area varchar(50) NOT NULL,
    price int NOT NULL,
    priceLabel varchar(50) NOT NULL,
    loanAmount int NOT NULL,
    loanLabel varchar(50) NOT NULL,
    cashBack int NOT NULL,
    cashBackLabel varchar(50) NOT NULL,
    location varchar(255) NOT NULL,
    district varchar(100) NOT NULL,
    mapUrl text,
    mapEmbed text,
    image text,
    features text,
    status enum('available','reserved','sold') NOT NULL DEFAULT 'available',
    sortOrder int DEFAULT 0,
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
  )`,
  `CREATE TABLE IF NOT EXISTS inquiries (
    id int AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    phone varchar(20) NOT NULL,
    lineId varchar(100),
    houseId int,
    message text,
    status enum('new','contacted','completed') NOT NULL DEFAULT 'new',
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
  )`,
  `CREATE TABLE IF NOT EXISTS reviews (
    id int AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    role varchar(100) NOT NULL,
    text text NOT NULL,
    stars int NOT NULL DEFAULT 5,
    image text,
    houseType varchar(100),
    location varchar(100),
    cashback varchar(100),
    sortOrder int DEFAULT 0,
    isVisible int DEFAULT 1,
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
  )`
];

for (const sql of createStatements) {
  try {
    await conn.query(sql);
    const tableName = sql.match(/CREATE TABLE IF NOT EXISTS (\w+)/)?.[1];
    console.log(`✓ Table '${tableName}' ready`);
  } catch (e) {
    console.error("✗ Error:", e.message);
  }
}

// Verify tables
const [tablesAfter] = await conn.query("SHOW TABLES");
console.log("\nAll tables:", tablesAfter.map(t => Object.values(t)[0]));

await conn.end();
console.log("\n✓ Database schema ready!");
