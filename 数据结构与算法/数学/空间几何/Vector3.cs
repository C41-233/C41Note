/*
    左手坐标系，y轴向上，x轴向右，z轴向前
 */
public struct Vector3
{

    public float X, Y, Z;

    public Vector3(float x, float y, float z)
    {
        X = x;
        Y = y;
        Z = z;
    }

    /*
        计算向量的叉积（向量积）
     */
    public static Vector3 CrossProduct(Vector3 lhs, Vector3 rhs)
    {
        return new Vector3(lhs.Y * rhs.Z - lhs.Z * rhs.Y, lhs.Z * rhs.X - lhs.X * rhs.Z, lhs.X * rhs.Y - lhs.Y * rhs.X);
    }

    /*
        计算向量绕y轴旋转的角度，旋转方向为从z轴向x轴旋转（顺时针），z轴正方向为0
    */
    public float GetAngleY()
    {
        if (X == 0 && Z == 0)
        {
            return 0;
        }
        
        var t = Z / Math.Sqrt(X * X + Z * Z);
        if (t < -1)
        {
            t = -1;
        }
        else if (t > 1)
        {
            t = 1;
        }

        var angle = Math.Acos(t) / Math.PI * 180f;
        if (X < 0)
        {
            angle = 360 - angle;
        }
        return (float) angle;
    }

}