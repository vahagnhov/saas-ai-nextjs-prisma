import {auth} from '@clerk/nextjs'

import prismaDB from '@/lib/prisma-db'
import {MAX_FREE_COUNTS} from '@/constants'

export const incrementApiLimit = async () => {
    const {userId} = auth();

    if (!userId) {
        return;
    }

    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {userId: userId},
    });

    if (userApiLimit) {
        await prismaDB.userApiLimit.update({
            where: {userId: userId},
            data: {count: userApiLimit.count + 1},
        });
    } else {
        await prismaDB.userApiLimit.create({
            data: {userId: userId, count: 1},
        });
    }
};

export const checkApiLimit = async () => {
    const {userId} = auth();

    if (!userId) {
        return false;
    }

    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {userId: userId},
    });

    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false;
    }
};

export const getApiLimitCount = async () => {
    const {userId} = auth();

    if (!userId) {
        return 0;
    }

    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (!userApiLimit) {
        return 0;
    }

    return userApiLimit.count;
};