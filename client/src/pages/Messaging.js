import React, {useState }from 'react'
import firebase from 'firebase/compat/app'

import 'firebase/firestore'

import ChatMessage from '../components/Chat';

// import { useAuthState } from 'react-firebase-hooks/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore'

const firestore = firebase.firestore()

firebase.initializeApp({
    apiKey: "AIzaSyDCQ872GndGorK98N8kMCaXJ1sEggmYQ2A",
    authDomain: "bootcamp-social.firebaseapp.com",
    projectId: "bootcamp-social",
    storageBucket: "bootcamp-social.appspot.com",
    messagingSenderId: "931737071360",
    appId: "1:931737071360:web:33692411258104eeb10de5",
    measurementId: "G-E3DNN554NF"
})



const ChatRoom = () => {
    
    const messagesRef = firestore.collection('messages');

    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('')

    const sendMessage = async(event) => {
        event.preventDefault();

        // const { uid } = currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setFormValue('');
    }

    return(
       <div>
            <div>
                {messages && messages.map(message => <ChatMessage key={message.id} message={message}/>)}
            </div>
    
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(event) => setFormValue(event.target.value)}/>
                <button type="submit">HEY
                </button>
            </form>
         </div>
          
        )
    
      
    
}

export default ChatRoom






    
