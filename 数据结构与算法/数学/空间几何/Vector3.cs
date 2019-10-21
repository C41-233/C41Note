/*
	计算向量的叉积（向量积），右手坐标系。
 */
public static Vector3 CrossProduct(Vector3 lhs, Vector3 rhs)
{
	return new Vector3(lhs.Y * rhs.Z - lhs.Z * rhs.Y, lhs.Z * rhs.X - lhs.X * rhs.Z, lhs.X * rhs.Y - lhs.Y * rhs.X)
}