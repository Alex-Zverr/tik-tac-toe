export type Left<L> = {
	type: 'left'
	error: L
}
export type Right<R> = {
	type: 'right'
	value: R
}

export type Either<L, R> = Left<L> | Right<R>

export const left = <L>(error: L): Left<L> => ({
	error,
	type: 'left',
})
export const right = <R>(value: R): Right<R> => ({
	type: 'right',
	value: value,
})

export const mapRight = <R, U, L>(
	either: Either<L, R>,
	fn: (value: R) => U
): Either<L, U> => {
	if (either.type === 'right') return right(fn(either.value))
	return either
}

export const mapLeft = <R, L, U>(
	either: Either<L, R>,
	fn: (value: L) => U
): Either<U, R> => {
	if (either.type === 'left') return left(fn(either.error))
	return either
}

export const matchEither = <L, R, V>(
	either: Either<L, R>,
	mather: {
		left: (error: L) => V
		right: (value: R) => V
	}
): V => {
	if (either.type === 'left') return mather.left(either.error)

	return mather.right(either.value)
}
