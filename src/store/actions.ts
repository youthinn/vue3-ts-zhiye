// import axios, { AxiosRequestConfig } from 'axios'
// import { Commit } from 'vuex'


// interface test1 {
//   currentPage?: number;
//   pageSize?:number;
// }

// interface test2 {
//   state?: number;
//   commit?: number;
//   cid: string | number;
//   id?: string | number;
// }

// const asyncAndCommit = async (url: string, mutationName: string,
//   commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
//   const { data } = await axios(url, config)
//   if (extraData) {
//     commit(mutationName, { data, extraData })
//   } else {
//     commit(mutationName, data)
//   }
//   return data
// }

// export default {
//   fetchColumns ({ state, commit }: any, params = {}) {
//     const { currentPage = 1, pageSize = 6 } = params
//     if (state.columns.currentPage < currentPage) {
//       return asyncAndCommit(`/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
//     }
//   },
//   fetchColumn ({ state, commit }: any, cid: string | number) {
//     if (!state.columns.data[cid]) {
//       return asyncAndCommit(`/api/columns/${cid}`, 'fetchColumn', commit)
//     }
//   },
//   fetchPosts ({ state, commit }: any, cid: string | number) {
//     if (!state.posts.loadedColumns.includes(cid)) {
//       return asyncAndCommit(`/api/columns/${cid}/posts`, 'fetchPosts', commit, { method: 'get' }, cid)
//     }
//   },
//   fetchPost ({ state, commit }: any, id: string | number) {
//     const currentPost = state.posts.data[id]
//     if (!currentPost || !currentPost.content) {
//       return asyncAndCommit(`/api/posts/${id}`, 'fetchPost', commit)
//     } else {
//       return Promise.resolve({ data: currentPost })
//     }
//   },
//   updatePost ({ commit }: any, { id, payload }: any) {
//     return asyncAndCommit(`/api/posts/${id}`, 'updatePost', commit, {
//       // patch是更新
//       method: 'patch',
//       data: payload
//     })
//   },
//   fetchCurrentUser ({ commit }: any) {
//     return asyncAndCommit('/api/user/current', 'fetchPostUser', commit)
//   },
//   login ({ commit }: any, payload: any) {
//     return asyncAndCommit('/api/user/login', 'login', commit, {
//       method: 'post',
//       data: payload
//     })
//   },
//   loginAndFetch ({ dispatch }: any, loginData: any) {
//     return dispatch('login', loginData).then(() => {
//       return dispatch('fetchCurrentUser')
//     })
//   },
//   createPost ({ commit }:any, payload: any) {
//     return asyncAndCommit('/api/posts', 'createPost', commit, {
//       method: 'post',
//       data: payload
//     })
//   },
//   deletePost ({ commit }:any, id: any) {
//     return asyncAndCommit(`/api/posts/${id}`, 'deletePost', commit, { method: 'delete' })
//   }
// }