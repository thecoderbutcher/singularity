-- CreateTable
CREATE TABLE "Playlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "progressSec" INTEGER NOT NULL DEFAULT 0,
    "playlistId" INTEGER NOT NULL,
    CONSTRAINT "Song_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
