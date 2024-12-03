import { left, right } from '@/shared/lib/either'
import { SignJWT, jwtVerify } from 'jose'
import 'server-only'
import { SessionEntity } from '../domain'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionEntity) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ['HS256'],
		})
		return right(payload)
	} catch (error) {
		return left('invalid-session' as const)
	}
}

// const createSessionCookie = async (user: UserEntity) => {
// 	const userId = userToSession(user, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))
// 	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
//   const session = await encrypt({ userId, expiresAt })(await cookies()).set(
//     'session',
//     session,
//     {
//       httpOnly: true,
//       secure: true,
//       expires: expiresAt,
//       sameSite: 'lax',
//       path: '/',
//     }
//   )
// }

export const sessionService = { encrypt, decrypt }
