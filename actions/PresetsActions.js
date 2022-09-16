import {
  PRESETS_FETCH_SUCCESS,
  PRESETS_FETCH,
} from './types';
import { firebaseApp } from '../firebaseConfig'
import firebase from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";
//import { getDatabase, ref, onValue, get, query, limitToLast, push, remove, set, orderByChild, orderBy, orderByKey, endBefore, limitToFirst, equalTo, update, increment  } from "firebase/database";
const db = getFirestore(firebaseApp);

// export const presetsFetch = (loading) => {
//   return (dispatch) => {
//         dispatch({
//           type: PRESETS_FETCH_SUCCESS,
//           payload: loading
//         })
//    }
// }
//
export const presetsFetch =  (tableName) => {
  console.log('presets fetch')
  console.log(tableName)
  return function(dispatch) {
        return getDocs(collection(db, tableName)).then(querySnapshot => {
            dispatch({
                type: PRESETS_FETCH_SUCCESS,
                payload: {key: tableName, value: querySnapshot.docs.map(doc => [doc.id, doc.data()])}
            });
        });
    };
}


  //     var badgesRef = ref(database, '/lighting');
  //     console.log('success')
  //     onValue(badgesRef, (snapshot) => {
  //       dispatch({
  //         type: BADGES_FETCH_SUCCESS,
  //         payload: snapshot.val()
  //       })
  //     })
  //  }
  // return (dispatch) => {
  //     console.log('get lighting')
  //     var recentPostsRef = query(ref(database, '/lighting'));
  //     console.log('success')
  //     console.log(recentPostsRef)
  //     onValue(recentPostsRef, (snapshot) => {
  //       if(snapshot.val() != null) {
  //         dispatch({
  //           type: PRESETS_FETCH_SUCCESS,
  //           payload: snapshot.val()
  //         })
  //
  //       } else {
  //         communityFetchStatus(false)
  //       }
  //     })
  //  }
//}

// export const communityFullFetch = (originalPostId) => {
//   //communityFetchStatus(true)
//   return (dispatch) => {
//       var repliesRef = query(ref(database, '/community_replies'), orderByChild('originalPostId'), equalTo(originalPostId))
//       onValue(repliesRef, (snapshot) => {
//         if(snapshot.val() != null) {
//           dispatch({
//             type: PRESETS_FULL_FETCH_SUCCESS,
//             payload: snapshot.val()
//           })
//         } else {
//           dispatch({
//             type: PRESETS_FULL_FETCH_SUCCESS,
//             payload: []
//           })
//           //communityFetchStatus(false)
//         }
//       })
//    }
// }
//
//
//
//
// export const communityTeaserFetch = () => {
//   return (dispatch) => {
//       var recentPostsRef = query(ref(database, '/community'), limitToLast(1))
//       onValue(recentPostsRef, (snapshot) => {
//         dispatch({
//           type: PRESETS_FETCH_TEASER_SUCCESS,
//           payload: snapshot.val()
//         })
//       })
//    }
// }
//
// export const createCommunity = (data) => {
//   const { text, uid, userHandle, createdAt, inverseDate } = data
//   return (dispatch) => {
//     push(ref(database, `/community`), {
//       text,
//       uid,
//       userHandle,
//       createdAt,
//       inverseDate,
//       originalPost: true,
//       activeUsers: [uid],
//     })
//     .then((res) => {
//       onValue(res, (snapshot) => {
//         dispatch({
//           type: ADD_PRESETS,
//           payload: [res.key, snapshot.val()]
//         })
//       })
//     })
//     .catch((error) => {
//       console.log(`error is ${error}`)
//     })
//   }
// }
//
// export const updateCommunityReplyCount = (originalPostId, incOrDec) => {
//   return () => {
//     incrementValue = incOrDec === 'increase' ? 1 : -1
//     update(ref(database, `/community/${originalPostId}`), {
//         totalReplies: increment(incrementValue)
//     });
//   }
// }
//
// export const createCommunityReply = (data) => {
//   const { text, uid, userHandle, createdAt, inverseDate, originalPostId, responsePostId } = data
//   return () => {
//     push(ref(database, `/community_replies`), {
//       text,
//       uid,
//       userHandle,
//       createdAt,
//       inverseDate,
//       originalPostId,
//       responsePostId
//     })
//     .then((res) => {
//       communityFullFetch()
//     })
//     .catch((error) => {
//       console.log(`error is ${error}`)
//     })
//   }
// }
//
//
//
// export const reactToCommunity = (data) => {
//   const { uid, communityId, emoji, createdAt } = data
//   return () => {
//     push(ref(database, `/community/${communityId}/emojis/${emoji}`), {
//       uid, createdAt
//     })
//     .then(success => {
//
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }
//
// export const removeEmoji = (data) => {
//   const { communityId, icon, reactionId } = data
//   return () => {
//     remove(ref(database, `/community/${communityId}/emojis/${icon}/${reactionId}`))
//   }
// }
//
// export const deleteCommunity = (id) => {
//   return (dispatch) => {
//     remove(ref(database, `/community/${id}`))
//     .then((res) => {
//       dispatch({
//         type: REMOVE_PRESETS,
//         payload: id
//       })
//     })
//     .catch((error) => {
//       console.log(`error is ${error}`)
//     })
//   }
// }
//
// export const deleteCommunityReply = (id) => {
//   return (dispatch) => {
//     remove(ref(database, `/community_replies/${id}`))
//     .then((res) => {
//       dispatch({
//         type: REMOVE_PRESETS_REPLY,
//         payload: id
//       })
//     })
//     .catch((error) => {
//       console.log(`error is ${error}`)
//     })
//   }
// }
//
// export const addEmojiReply = (data) => {
//   const { uid, communityReplyId, emoji, createdAt } = data
//   return () => {
//     push(ref(database, `/community_replies/${communityReplyId}/emojis/${emoji}`), {
//       uid, createdAt
//     })
//     .then(success => {
//
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }
//
// export const removeEmojiReply = (data) => {
//   const { communityReplyId, icon, reactionId } = data
//   return () => {
//     remove(ref(database, `/community_replies/${communityReplyId}/emojis/${icon}/${reactionId}`))
//   }
// }
