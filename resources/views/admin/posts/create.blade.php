@extends('admin.layout')

@section('header')
<h1>
	POSTS
	<small>Crear publicación</small>
</h1>
<ol class="breadcrumb">
	<li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Inicio</a></li>
	<li><a href="{{ route('admin.posts.index') }}"><i class="fa fa-list"></i> Posts</a></li>
	<li class="active">Crear</li>
</ol>
@stop

@section('content')
<div class="row">
	<form>
	<div class="col-md-8">
		<div class="box box-primary">
			
				<div class="box-body">
					<div class="form-group">
						<label>Título de la publicación</label>
						<input name="title" class="form-control" placeholder="Ingresa aquí el título de la publicación">
					</div>
					<div class="form-group">
						<label>Contenido publicación</label>
						<textarea rows="10" name="body" class="form-control" placeholder="Ingresa el contendido completo de la publicación"></textarea>
					</div>
				</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="box box-primary">
			<div class="box-body">
				<div class="form-group">
					<label>Fecha de publicación:</label>
					<div class="input-group date">
						<div class="input-group-addon">
							<i class="fa fa-calendar"></i>
						</div>
						<input name="published_at" type="text" class="form-control pull-right" id="datepicker">
					</div>
				</div>
				<div class="form-group">
					<label>Categorías</label>
					<select class="form-control">
						<option value="">Seleciona una categoría</option>
						@foreach ($categories as $category)
							<option value="{{ $category->id }}">{{ $category->name }}</option>
						@endforeach
					</select>
				</div>
				<div class="form-group">
					<label>Extracto publicación</label>
					<textarea name="excerpt" class="form-control" placeholder="Ingresa un extracto de la publicación"></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-block">Guardar Publicación</button>
				</div>
			</div>
		</div>
	</div>
	</form>
</div>
@stop

@push('styles')
	<link rel="stylesheet" href="/adminlte/plugins/datepicker/datepicker3.css">
@endpush

@push('scripts')
	<script src="/adminlte/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script>
	    $('#datepicker').datepicker({
	      autoclose: true
	    });
	</script>
@endpush







