
export const Right = x => ({
  chain: f => f(x),
  map:f => Right(f(x)),
  fold:(f,g) =>g(x),
	inspect: () => `Box(${x})`
})

export const Left = x => ({
  chain: f => Left(x), //chain and map do the same(?)
  map: f => Left(x), // is more about how we use this for development
  fold: (f,g) => f(x),
	inspect: () => `Box(${x})`
})

export const fromNullable = x =>
  x != null ? Right(x) : Left(null)

export const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}