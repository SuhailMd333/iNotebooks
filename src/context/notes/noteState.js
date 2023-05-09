import React from 'react';
import Notecontext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          },
          {
            "_id": "6452184539339360452f88a3",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:05.519Z",
            "__v": 0
          },
          {
            "_id": "6452184939339360452f88a5",
            "user": "645201a51f633c215c86697b",
            "title": "general",
            "description": "your notes is ok",
            "tag": "okpartythankyou",
            "date": "2023-05-03T08:16:09.560Z",
            "__v": 0
          }
    ]
  const  [notes,setnotes] = useState(notesInitial)


    return (
<Notecontext.Provider value= { {notes,setnotes}}>  

    {props.children}
</Notecontext.Provider>

    )
}

export default NoteState ;