import db from "../../../../../../prisma/db";

export async function GET(_req, { params }) {
  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(params.id),
    },
    include: {
      author: true,
    },
  });

  return Response.json(replies);
}
