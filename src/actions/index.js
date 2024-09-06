'use server';

import { revalidatePath } from 'next/cache';
import db from '../../prisma/db';

export async function incrementThumbsUp(post) {
  //Only for simulation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  revalidatePath('/');
  revalidatePath(`/${post.slug}`);
}
