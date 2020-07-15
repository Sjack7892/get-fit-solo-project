CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "calorie_goal" INT DEFAULT 2000,
    "protein_goal" INT DEFAULT 150,
    "carbs_goal" INT DEFAULT 200,
    "fat_goal" INT DEFAULT 67
);

CREATE TABLE "workouts" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "type" VARCHAR (1000) NOT NULL,
    "reps" INT,
    "weight" INT,
    "date" DATE
);

CREATE TABLE "nutrition" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "calories" INT,
    "protein" INT,
    "carbs" INT,
    "fat" INT,
    "date" DATE,
    "description" VARCHAR
);