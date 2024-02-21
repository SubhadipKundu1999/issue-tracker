
import { NextRequest, NextResponse } from "next/server";
import { IssueSchema } from "../../validation"
import prisma from "../../../prisma/client"

export async function POST(request: NextRequest) {

    const body = await request.json();

    const validation = IssueSchema.safeParse(body);
    console.log(validation);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    })

    return NextResponse.json(newIssue, { status: 201 });
}
