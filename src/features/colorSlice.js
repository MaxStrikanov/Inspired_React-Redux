import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLOR_URL } from '../const';

export const fetchColor = createAsyncThunk(
	'color/fetchColor',
	async () => {
		const responce = await fetch(COLOR_URL)
		return  await responce.json()
	}
)

export const colorSlice = createSlice({
	name: 'color',
	initialState: {
		status: 'idle',
		colorList: [],
		error: null,
	},
	extraReducers: builder => {
		builder
		.addCase(fetchColor.pending, (state) => {
			state.status = 'loading'
		})
		.addCase(fetchColor.fulfilled, (state, action) => {
			state.status = 'success';
			state.colorList = action.payload;
		})
		.addCase(fetchColor.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message
		});
	}
})

export default colorSlice.reducer