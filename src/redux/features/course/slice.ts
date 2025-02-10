// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course, CoursesSlice } from './@types'

const initialState = {
  course: {} as Course,
  courses: [],
  loading: true
} as CoursesSlice

export const slice = createSlice( {
  name: 'course',
  initialState,
  reducers: {
    setCourse: ( state, { payload }: PayloadAction<{course: Course}> ) => {
      state.course = payload.course
      state.loading = false
    },
    clearCourse: ( state ) => {
      state.course = {} as Course,
      state.loading = false
    },
    setCourses: ( state, { payload }: PayloadAction<{courses: Course[]}> ) => {
      state.courses = payload.courses
      state.loading = false
    },
    clearCourses: ( state ) => {
      state.courses = [],
      state.loading = false
    },
    requestCourses: ( state ) => {
      state.loading = true
    }
  }
} )

export const { setCourse, clearCourse, setCourses, clearCourses, requestCourses } = slice.actions
export default slice.reducer
