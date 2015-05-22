<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {

  public function index($page = 'home')
  {
    
    if ( ! file_exists(APPPATH.'/views/pages/'.$page.'.php'))
    {
      // 页面不存在
      show_404();
    }

    $this->load->view('templates/header');
    $this->load->view('pages/'.$page);
    $this->load->view('templates/footer');

  }

}
