import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface IStoreProviderProps {
	children?: ReactNode
	initialState?: StateSchema
}

export const StoreProvider: React.FC<IStoreProviderProps> = (props) => {
	const { children, initialState } = props

	const store = createReduxStore(initialState)

	return <Provider store={store}>{children}</Provider>
}
