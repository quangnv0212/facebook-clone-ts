import { authApi } from '@/api-client/auth-api'
import { UserSchema } from '@/utils/rules';
import useSWR from 'swr'
// import { PublicConfiguration } from 'swr/dist/types'

// Auth --> Protected Pages
// <Auth>{children}</Auth>
export function useAuth(options?: Partial<any>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/getAllPosts', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined
    type FieldType = Pick<UserSchema, "email" | "password">;
	async function login(data:FieldType) {
		await authApi.login(data)
		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
