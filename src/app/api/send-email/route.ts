import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, phone, region, message } = await request.json()

    // 필수 필드 검증
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 연락처는 필수입니다.' },
        { status: 400 }
      )
    }

    // 이메일 템플릿
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #c4161c; font-size: 24px; margin: 0;">황금쭈꾸미집 창업 문의</h1>
            <div style="width: 50px; height: 3px; background-color: #ffc20f; margin: 10px auto;"></div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #c4161c; padding-bottom: 5px;">신청자 정보</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">이름:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">연락처:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">지역:</td>
                <td style="padding: 8px 0; color: #333;">${region || '미지정'}</td>
              </tr>
            </table>
          </div>
          
          ${message ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #c4161c; padding-bottom: 5px;">문의 내용</h2>
            <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              문의 접수 시간: ${new Date().toLocaleString('ko-KR')}
            </p>
            <p style="color: #c4161c; font-weight: bold; margin: 10px 0 0 0;">
              빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>
        </div>
      </div>
    `

    // Resend API를 사용하여 이메일 발송
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend에서 제공하는 기본 발송 주소
      to: [process.env.NOTIFICATION_EMAIL!],
      subject: `🔥 황금쭈꾸미집 창업 문의 - ${name}님`,
      html: emailHtml,
      replyTo: `${name} <noreply@example.com>`, // 답장 시 표시될 이름
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: '이메일 발송 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    
    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.',
      emailId: data?.id
    })

  } catch (error) {
    console.error('API Route error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}