import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCircleIcon, PowerIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';;

const ListMovie = () => {
    const listMovie = {
        header: { stt: "STT", movieInfo: "Phim", rating: "rating", genres: "Thể loại", status: "Trạng thái", releaseDate: "Ngày phát hành", action: "actions" },
        movie: [
            {
                "movieId": "6573514f5045a333ce25d1c0",
                "title": "Avengers: End Game",
                "director": "Anthony Russo, Joe Russo",
                "genres": "Hành Động, Phiêu Lưu, Giả Tưởng",
                "actor": "Scarlett Johansson, Jeremy Renner, Chris Hemsworth, Chris Evans, Mark Ruffalo, Paul Rudd, Robert Downey Jr.",
                "releaseDate": "2019-09-20T11:04:10.000+07:00",
                "desc": "Cú búng tay của Thanos đã khiến toàn bộ dân số biến mất một nửa. Các siêu anh hùng đánh mất bạn bè, người thân và đánh mất cả chính mình. Bộ sáu Avengers đầu tiên tứ tán. Iron Man kẹt lại ngoài không gian, Hawkeye mất tích. Thor, Captain America, Hulk và Black Widow đều chìm trong nỗi đau vô tận vì mất đi những người thân yêu. Họ phải làm gì để cứu vãn mọi chuyện ở Avengers: Hồi Kết? Điều khán giả quan tâm nhất hiện nay chính là ai sẽ còn sống và ai sẽ ra đi khi Avengers: Endgame kết thúc. Captain America là người có khả năng ra đi cao nhất khi Chris Evans đã tuyên bố từ bỏ chiếc áo Đại Úy Mỹ. Iron Man Tony Stark- người mở đầu của vũ trụ điện ảnh Marvel cũng có khả năng “bay màu” tương tự. Thor sau tội lỗi “không nhắm vào đầu” cũng thuộc danh sách nguy hiểm. Những người duy nhất chắc chắn còn sống sau Avengers: Hồi Kết là Nick Fury, Maria Hill và cậu bé Người Nhện Peter Parker. Xem thêm tại: https://www.galaxycine.vn/dat-ve/avengers-endgame",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703831897/Movie/njyv7h5toofzwxpruggl.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=0jNvJU52LvU",
                "duration": "195",
                "rating": "0"
            },
            {
                "movieId": "657351c55045a333ce25d1c2",
                "title": "Đất rừng phương nam",
                "director": "Nguyễn Quang Dũng",
                "genres": "Chuyển thể, Kịch tính",
                "actor": "Huỳnh Hạo Khang, Bùi Lý, Bảo Ngọc, Đỗ Kỳ Phong, Tuấn Trần, Tiến Luật, Băng Di, Trấn Thành, Hứa Vĩ Văn, Tuyền Mập, Mai Tài Phến, Huỳnh Đông, Bích Ngọc, Công Ninh, Hồng Ánh",
                "releaseDate": "2023-10-16T11:04:10.000+07:00",
                "desc": "Đất Rừng Phương Nam (Trấn Thành) chất lượng HD Đất Rừng Phương Nam phiên bản điện ảnh được kế thừa và phát triển từ tiểu thuyết cùng tên của nhà văn Đoàn Giỏi. Bộ phim kể về hành trình phiêu lưu của An - một cậu bé chẳng may mất mẹ trên đường đi tìm cha. Cùng với An, khán giả sẽ trải nghiệm sự trù phú của thiên nhiên và nét đẹp văn hoá đặc sắc của vùng đất Nam Kì Lục Tỉnh, sự hào hiệp của những người nông dân bám đất bám rừng và tinh thần yêu nước kháng Pháp đầu thế kỉ 20.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703719113/Movie/sxhwojjocpcprfk0z5qs.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=P4QKPUyJQQw",
                "duration": "190",
                "rating": "0"
            },
            {
                "movieId": "658333e6f6bc4b33f3badc0a",
                "title": "NHÀ BÀ NỮ",
                "director": "Trấn Thành",
                "genres": "Hài, CHính kịch",
                "actor": "Trấn Thành, Lê Giang, NSND Ngọc Giàu, Uyển Ân, Khả Như, NSND Việt Anh, NSƯT Công Ninh, Ngân Quỳnh, Song Luân, Lê Dương Bảo Lâm",
                "releaseDate": "2023-01-22T17:00:00.000Z",
                "desc": "Bộ phim có sự tham gia của nhiều gương mặt trong giới giải trí Việt Nam như Trấn Thành, Lê Giang, NSND Ngọc Giàu, Uyển Ân, Khả Như, NSND Việt Anh, NSƯT Công Ninh, Ngân Quỳnh, Song Luân, Lê Dương Bảo Lâm, Lý Hạo Mạnh Quỳnh, Phương Lan, Hoàng Mèo... Bộ phim xoay quanh bà bán bánh canh cua tên Ngọc Nữ với những câu chuyện hỷ nộ ái ố xung quanh cuộc sống thường ngày. Theo tiết lộ của nhà sản xuất, Ngọc Nữ được lấy cảm hứng từ người phụ nữ bán bánh canh cua giá 300.000 đồng gây tranh cãi trên mạng xã hội và nội dung được lấy ý tưởng từ câu chuyện gia đình của một người bạn trong giới giải trí Việt Nam của Trấn Thành.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703112371/Movie/hunpc5z1avbj8ify25ub.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=pg4L29p98Kw",
                "duration": "102",
                "rating": "null"
            },
            {
                "movieId": "65833c38f6bc4b33f3badc0b",
                "title": "Aquaman và vương quốc thất lạc",
                "director": "James Wan",
                "genres": "Hành động, Kỳ ảo",
                "actor": "Anne McCarthy",
                "releaseDate": "2023-12-21T17:00:00.000Z",
                "desc": "Aquaman và Vương Quốc Thất Lạc là bộ phim siêu anh hùng của Mỹ ra mắt năm 2023 dựa trên nhân vật Aquaman từ DC Comics. Phim được sản xuất bởi DC Films, The Safran Company và Atomic Monster Productions và phân phối bởi Warner Bros. Pictures.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703112401/Movie/fll3jlwvzjuytj8zwj6g.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=mx3lXJpt9BU",
                "duration": "120",
                "rating": "null"
            },
            {
                "movieId": "65833d68f6bc4b33f3badc0c",
                "title": "Một mình vẫn ổn't",
                "director": "Park Bum-Soo",
                "genres": " Lãng mạn, Hài ",
                "actor": "Lee Dong-wook, Im Soo-jung, Sung Hoon, Lee Sang-yi, Ji Yi-soo",
                "releaseDate": "2023-12-14T17:00:00.000Z",
                "desc": "Được dịch từ tiếng Anh-Single in Seoul là một bộ phim hài lãng mạn Hàn Quốc năm 2023 do Park Beom-soo đạo diễn, với sự tham gia của Lee Dong-wook và Im Soo-jung. Bộ phim kể về Yeong-ho, người thích ở một mình và Hyeon-jin, một nhà xuất bản thích giao du, người viết một bài tiểu luận về cuộc sống độc thân.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703112421/Movie/quw3b10lkgi9rkrgwqyt.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=g0ddV0_Cogc",
                "duration": "110",
                "rating": "5"
            },
            {
                "movieId": "65833e77f6bc4b33f3badc0d",
                "title": "Người vợ cuối cùng",
                "director": "Victor Vu",
                "genres": "Lãng mạn ",
                "actor": "Kaity Nguyễn, Thuận Nguyễn,   NSƯT Quang Thắng, Kim Oanh",
                "releaseDate": "2023-11-02T17:00:00.000Z",
                "desc": "Lấy cảm hứng từ tiểu thuyết Hồ Oán Hận, của nhà văn Hồng Thái, Người Vợ Cuối Cùng là một bộ phim tâm lý cổ trang, lấy bối cảnh Việt Nam vào triều Nguyễn. LINH - Người vợ bất đắc dĩ của một viên quan tri huyện, xuất thân là con của một gia đình nông dân nghèo khó, vì không thể hoàn thành nghĩa vụ sinh con nối dõi nên đã chịu sự chèn ép của những người vợ lớn trong gia đình. Sự gặp gỡ tình cờ của cô và người yêu thời thanh mai trúc mã của mình - NH N đã dẫn đến nhiều câu chuyện bất ngờ xảy ra khiến cuộc sống cô hoàn toàn thay đổi.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703112441/Movie/tiev4okslggnagfmqwgp.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=RhlCD8FAs08",
                "duration": "122",
                "rating": "null"
            },
            {
                "movieId": "6585cab591461d71c226203e",
                "title": "KẺ ĂN HỒN",
                "director": "Trần Hữu Tấn",
                "genres": "Thriller/Criminal/Horror Vietnam",
                "actor": "Hoàng Hà, Võ Điền Gia Huy, Huỳnh Thanh Trực, NSƯT Chiều Xuân, Nghệ sĩ Viết Liên, NSND Ngọc Thư, Nguyễn Hữu Tiến, Nguyễn Phước Lộc, Nghinh Lộc, Lý Hồng Ân, Vũ Đức Ngọc…",
                "releaseDate": "2023-12-14T17:00:00.000Z",
                "desc": "Kẻ Ăn Hồn (A Soul Reaper) là một bộ phim điện ảnh kể về hàng loạt cái chết đầy bí ẩn tại một ngôi làng nơi tồn tại ma thuật tà ác cổ xưa: 5 mạng sống đổi lấy bình Rượu Sọ Người. Bộ phim đưa người xem quay ngược thời gian, khám phá những cái chết rùng rợn và sự hiện diện của những thế lực đen tối đang hoành hành. Với sự pha trộn giữa kinh dị, bí ẩn và văn hóa dân gian cổ xưa, Ke An Hon (A Soul Reaper) hứa hẹn sẽ là một bộ phim kịch tính đầy lôi cuốn.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703266998/Movie/wq31h77zpjzelryqxica.jpg",
                "trailerLink": "https://www.youtube.com/watch?v=xWh0g4rKGjI",
                "duration": "109",
                "rating": "null"
            },
            {
                "movieId": "6585cb3f91461d71c226203f",
                "title": "QUỶ CẨU",
                "director": "Lưu Thành Luân",
                "genres": "Kinh Dị",
                "actor": "Quang Tuấn, NSND Kim Xuân, Vân Dung, Quốc Quân, Nam Thư, Mie….",
                "releaseDate": "2023-12-28T17:00:00.000Z",
                "desc": "Nam về quê để lo đám tang cho bố sau cái chết kinh hoàng của ông, trong khi phải che giấu bạn gái đang mang thai. Nam mơ thấy gia đình bị giết sau khi mai táng bố, và Mít – con chó trắng của gia đình có biểu hiện kì lạ. Ông Quyết, bà Thúy, và bà Liễu thì tin vào thầy cúng, còn Nam nghi ngờ về lò mổ chó truyền thống của gia đình và phải điều tra để giải quyết sự kiện kỳ lạ đang diễn ra.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703267135/Movie/gqzajeeownbegwgzkpgo.jpg",
                "trailerLink": "https://youtu.be/9Lb77QRywbM",
                "duration": "99",
                "rating": "null"
            },
            {
                "movieId": "6585cc2691461d71c2262040",
                "title": "NHÀ VỊT DI CƯ",
                "director": "Benjamin Renner",
                "genres": "Hoạt Hình",
                "actor": "Kumail Nanjiani, Elizabeth Banks, Caspar Jennings, Tresi Gazal, Awkwafina,…",
                "releaseDate": "2023-12-28T17:00:00.000Z",
                "desc": "Nhà Vịt Di Cư theo chân một gia đình vịt trời gồm vịt bố, vịt mẹ, cậu con trai tuổi teen Dax và vịt út Gwen, trong lần đầu tiên trải nghiệm chuyến di cư tiến về phía nam để trú đông. Thế nhưng, niềm vui vẻ sự háo hức kéo dài không bao lâu, gia đình vịt nhận ra, họ đang bay ngược chiều với tất cả các đàn vịt khác. Không kịp quay đầu, họ bất ngờ gặp phải loạt “chướng ngại vật” là những tòa nhà cao tầng của thành phố hiện đại. Liên tiếp sau đó là những thước phim đầy kịch tính nhưng vô cùng hài hước của nhà vịt trong quá trình khám phá đô thị mới.",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703267367/Movie/ov2b4ze2pgqssyzgam0t.jpg",
                "trailerLink": "https://youtu.be/B4SgxY6SoZ4",
                "duration": "83",
                "rating": "null"
            },
            {
                "movieId": "658e6983765a285ab798a09f",
                "title": "KẺ DJSKFHDSF",
                "director": "DDD",
                "genres": "DD",
                "actor": "DD",
                "releaseDate": "2023-12-29T17:00:00.000Z",
                "desc": "DSDD",
                "poster": "https://res.cloudinary.com/dyva3vnzd/image/upload/v1703831940/Movie/ry0sj7nhrtv6ppp9kxjp.jpg",
                "trailerLink": "http://localhost:5173/admin/add-item/movie",
                "duration": "298",
                "rating": "null"
            }
        ],
        action: { aChange: PowerIcon, aEdit: PencilSquareIcon, aDelete: TrashIcon }
    }
    return (
        <div>
            <div className='px-4'>
                <div className='h-20 mb-2 flex justify-between items-center border-b-2'>
                    <h2 className='text-3xl'>Danh sách phim</h2>
                    {
                        <button
                            className="my-4 px-8 border-slate-400 border p-4 text-sm font-bold uppercase rounded-2xl hover:bg-white hover:text-emerald-800 bg-emerald-600 text-white"
                            type='submit'
                            onClick={() => changeTab("/admin/add-item/movie")}
                        >
                            Add Movie
                        </button>
                    }
                </div>

                <div className='relative'>
                    <div className='px-3'>
                        {/* {
                            allMovie.length === 0 &&
                            <div className='flex justify-center absolute mx-auto top-80 right-1/2 z-50'>
                                {loading && <FontAwesomeIcon className='w-16 h-16 ' icon={faSpinner} spin />}
                            </div>
                        } */}
                        <div className=''>
                            {

                                <table className='mt-6 w-full'>
                                    <thead className=''>
                                        <tr>
                                            <th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.stt}</th>
                                            <th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.movieInfo}</th>
                                            <th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.rating}</th>
                                            <th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.genres}</th>
                                            {<th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.status}</th>}
                                            <th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.releaseDate}</th>
                                            {<th className='text-sm text-start font-light px-5 pb-4 uppercase'>{listMovie.header.action}</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listMovie.movie.map((item, index) => (
                                                <tr onClick={() => changeTab(`/admin/movie/${item.movieId}`)} className='border-b-8 border-slate-50 bg-slate-100'>
                                                    <td className='text-start font-medium px-5 py-4'>{index + 1}</td>
                                                    <td className='text-start font-medium px-5 py-4'>
                                                        <div className='flex items-center'>
                                                            <div div className='pr-2' >
                                                                <img className="h-20 w-16 text-emerald-600" src={item.poster} alt="" />
                                                            </div >
                                                            <div>
                                                                <h3 className='uppercase'>{item.title}</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-start font-medium px-5 py-4'>{item.rating}</td>
                                                    <td className='text-start font-medium px-5 py-4'>{item.genres}</td>
                                                    {<td className={`${item.delete ? "text-red-600" : "text-green-600"} text-start font-medium px-5 py-4`}>{item.delete ? "Hidden" : "Visible"}</td>}
                                                    <td className='text-start font-medium px-5 py-4'>{item.releaseDate.date}</td>
                                                    {<td className='text-start font-medium px-5 py-4'>
                                                        <div className='flex items-center'>
                                                            <button type='button' onClick={(e) => { e.stopPropagation(); handleChangeStatus(item.movieId) }} className='flex justify-center items-center w-8 h-8 mr-2 rounded-lg bg-emerald-100'>
                                                                <listMovie.action.aChange className='h-4 w-4 text-emerald-600' />
                                                            </button>
                                                            <a onClick={(e) => { e.stopPropagation(); changeTab(`/admin/update-item/movie/${item.movieId}`) }} className='flex justify-center items-center w-8 h-8 mr-2 rounded-lg bg-cyan-100'>
                                                                <listMovie.action.aEdit className='h-4 w-4 text-cyan-600' />
                                                            </a>
                                                            <button type='button' onClick={(e) => { e.stopPropagation(); handleOpenModal(item.movieId); }} className='flex justify-center items-center w-8 h-8 rounded-lg bg-red-100'>
                                                                <listMovie.action.aDelete className='h-4 w-4 text-red-600' />
                                                            </button>
                                                            {/* <div>
                                                                {modalStates[item.movieId] && (
                                                                    <ModalComponent
                                                                        isOpen={modalStates[item.movieId]}
                                                                        onClose={() => handleCloseModal(item.movieId)}
                                                                        onConfirm={() => handleDeleteMovie(item.movieId)}
                                                                        onCancel={() => handleCloseModal(item.movieId)}
                                                                        title='Xóa Phim'
                                                                        content='Bạn có chắc chắn xóa phim này ???'
                                                                        buttonName='Delete'
                                                                    />
                                                                )}
                                                            </div> */}
                                                        </div>
                                                    </td>}
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                        {/* <Pagination pageNumber={currentPage} onPageChange={HandleGetAllMovie} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListMovie
