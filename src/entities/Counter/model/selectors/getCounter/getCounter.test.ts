import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter.test', () => {
	test('должен вернуть counter из store', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
	})
})
